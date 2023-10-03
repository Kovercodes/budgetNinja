import React from "react";
import { joinClasses } from "../../../utils/joinClasses";
import s from "./money-text.module.scss";

const MoneyText = (props) => {
  return (
    <p className={joinClasses(s.moneyText, props.className)}>
      {props.children}
    </p>
  );
};

export default MoneyText;
