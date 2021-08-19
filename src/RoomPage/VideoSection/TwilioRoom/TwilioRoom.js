import React, { Component } from "react";
import { setParticipants } from "../../../store/actions";
import { store } from "../../../store/store";

class TwilioRoom extends Component {
  constructor(props) {
    super(props);

    const remoteParticipants = Array.from(
      this.props.room.participants.values()
    );

    this.state = {
      remoteParticipants: remoteParticipants,
    };

    remoteParticipants.forEach((participant) => {
      this.addParticipantToStore(participant);
    });
  }

  componentDidMount() {
    this.props.room.on("participantConnected", (participant) =>
      this.addParticipant(participant)
    );

    this.props.room.on("participantDisconnected", (participant) =>
      this.removeParticipant(participant)
    );
  }

  addParticipantToStore(participant) {
    const participants = store.getState().participants;
    if (participants.find((p) => p.identity === participant.identity)) {
      return;
    } else {
      const newParticipants = [...participants];
      newParticipants.push({ identity: participant.identity });
      store.dispatch(setParticipants(newParticipants));
    }
  }

  addParticipant(participant) {
    console.log(`${participant.identity} has joined the room`);
    this.addParticipantToStore(participant);

    this.setState({
      remoteParticipants: [...this.state.remoteParticipants, participant],
    });
  }

  removeParticipantFromStore(participant) {
    const participants = store
      .getState()
      .participants.filter((p) => p.identity !== participant.identity);
    store.dispatch(setParticipants(participants));
  }

  removeParticipant(participant) {
    console.log(`${participant.identity} has left the room`);
    this.removeParticipantFromStore(participant);
    this.setState({
      remoteParticipants: this.state.remoteParticipants.filter(
        (p) => p.identity !== participant.identity
      ),
    });
  }

  render() {
    return <div>Participants</div>;
  }
}

export default TwilioRoom;
