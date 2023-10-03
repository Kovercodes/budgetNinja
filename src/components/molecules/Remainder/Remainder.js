import React from "react";
import MoneyText from "../../atoms/MoneyText/MoneyText";
import RegText from "../../atoms/RegText/RegText";
import s from "./remainder.module.scss";

const Remainder = ({ money, days, openPref }) => {
  return (
    <div className={s.remainder}>
      <div className={s.wrapper}>
        <MoneyText>{money}</MoneyText>
        <button className={s.prefButton}></button>
      </div>
      <RegText className={s.smallText}>{`на ${days} дней`}</RegText>
    </div>
  );
};

export default Remainder;
