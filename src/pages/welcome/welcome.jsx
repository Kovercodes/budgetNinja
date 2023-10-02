import React from "react";
import LoginBlock from "../../components/molecules/LoginBlock/LoginBlock";
import s from "./welcome.module.scss";

const Home = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.headline}>
        <span className={s.headline__top}>Добро пожаловать в</span>
        <span className={s.headline__bottom}>BudgetNinja</span>
      </h1>
      <LoginBlock />
    </div>
  );
};

export default Home;
