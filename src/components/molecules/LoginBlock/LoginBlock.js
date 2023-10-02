import React from "react";
import s from "./login-block.module.scss";
import GoogleLogin from "../../../components/atoms/GoogleLogin/GoogleLogin";

const LoginBlock = () => {
  return (
    <section className={s.loginBlock}>
      <h2 className={s.loginBlock__header}>Регистрация или вход</h2>
      <GoogleLogin />
      <p className={s.loginBlock__text}>Больше вариантов входа уже скоро...</p>
    </section>
  );
};

export default LoginBlock;
