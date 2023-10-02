import React from "react";
import { joinClasses } from "../../../utils/joinClasses";
import s from "./reg-text.module.scss";

const RegText = (props) => {
  return (
    <p className={joinClasses(s.regText, props.className)}>{props.children}</p>
  );
};

export default RegText;
