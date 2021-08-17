import Actions from "./actions";

const initialState = {
  identity: "",
  isRoomHost: false,
  connectOnlyWithAudio: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_IDENTITY:
      return {
        ...state,
        identity: action.identity,
      };
    case Actions.SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.isRoomHost,
      };
    case Actions.SET_CONNECT_ONLY_WITH_AUDIO:
      return {
        ...state,
        connectOnlyWithAudio: action.onlyWithAudio,
      };
    default:
      return state;
  }
};

export default reducer;
