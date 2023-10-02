import React from "react";
import googleLogo from "./google-logo.svg";
import s from "./GoogleLogin.module.scss";
import { auth, provider } from "../../../utils/firebaseCofig";
import { signInWithPopup } from "firebase/auth";

const GoogleLogin = ({ setIsAuth }) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);

      console.log("Google login success");
    });
  };

  return (
    <button className={s.googleButton} onClick={signInWithGoogle}>
      Google <img src={googleLogo} alt="Google logo" />
    </button>
  );
};

export default GoogleLogin;
