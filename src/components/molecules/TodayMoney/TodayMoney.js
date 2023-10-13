import React from "react";
import s from "./today-money.module.scss";
import MoneyText from "../../atoms/MoneyText/MoneyText";
import GlowButton from "../../atoms/GlowButton/GlowButton";

const TodayMoney = (props) => {
  return (
    <div className={s.todayMoneyBox}>
      <MoneyText>{props.money}</MoneyText>
      <GlowButton className={s.glowButton} onClick={props.onClick}>
        {props.buttonText}
      </GlowButton>
    </div>
  );
};

export default TodayMoney;
