import React, { useEffect } from "react";
import { connect } from "react-redux";
import logo from "../resources/images/logo.png";
import { setIsRoomHost } from "../store/actions";
import ConnectingButtons from "./ConnectingButtons";
import "./IntroductionPage.css";

const IntroductionPage = ({ setIsRoomHostAction }) => {
  useEffect(() => {
    setIsRoomHostAction(false);
  }, [setIsRoomHostAction]);

  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img src={logo} className="introduction_page_image" alt="logo" />
        <ConnectingButtons />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapDispatchToProps)(IntroductionPage);
