import React from "react";
import s from "./login-block.module.scss";
import GoogleLogin from "../../../components/atoms/GoogleLogin/GoogleLogin";
import Header2 from "../../atoms/Header2/Header2";

const LoginBlock = ({ setIsAuth }) => {
  return (
    <section className={s.loginBlock}>
      <Header2>Регистрация или вход</Header2>
      <GoogleLogin setIsAuth={setIsAuth} />
      <p className={s.loginBlock__text}>Больше вариантов входа уже скоро...</p>
    </section>
  );
};

export default LoginBlock;
