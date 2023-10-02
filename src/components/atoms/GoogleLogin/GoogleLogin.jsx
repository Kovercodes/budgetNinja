import React from "react";
import googleLogo from "./google-logo.svg";
import s from "./GoogleLogin.module.scss";

const GoogleLogin = () => {
  return (
    <button className={s.googleButton}>
      Google <img src={googleLogo} alt="Google logo" />
    </button>
  );
};

export default GoogleLogin;
