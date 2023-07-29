import React from "react";
import iit from "../images/IIT.png";

const Login = (props) => {
  return (
    <div className="login-container">
      <img className="img-iit" src={iit}></img>
      <h1 className="welcome-message"> Student Gymkhana Voting portal</h1>
      <button className="login-button" onClick={props.connectWallet}>
        Login Metamask
      </button>
    </div>
  );
};

export default Login;
