import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import JoinRoomPage from "./JoinRoomPage/JoinRoomPage";
import RoomPage from "./RoomPage/RoomPage";
import IntroductionPage from "./IntroductionPage/IntroductionPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/join-room">
          <JoinRoomPage />
        </Route>
        <Route path="/room">
          <RoomPage />
        </Route>
        <Route path="/">
          <IntroductionPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
