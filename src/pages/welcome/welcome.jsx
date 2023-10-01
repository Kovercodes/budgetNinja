import React from "react";
import s from "./style.module.scss";
import googleLogo from "./google-logo.svg";

const Home = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.headline}>
        <span className={s.headline__top}>Добро пожаловать в</span>
        <span className={s.headline__bottom}>BudgetNinja</span>
      </h1>
      <section className={s.register}>
        <h2 className={s.register__header}>Регистрация или вход</h2>
        <button className={s.register__button}>
          Google <img src={googleLogo} alt="Google logo" />
        </button>
        <p className={s.register__text}>Больше вариантов входа уже скоро...</p>
      </section>
    </div>
  );
};

export default Home;
