import React from "react";
import googleLogo from "./google-logo.svg";
import s from "./GoogleLogin.module.scss";
import { auth, provider } from "../../../utils/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const GoogleLogin = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      navigate("/start-settings");

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
