import React from "react";
import { joinClasses } from "../../../utils/joinClasses";
import s from "./header-2.module.scss";

const Header2 = (props) => {
  return (
    <h2 className={joinClasses(s.header2, props.className)}>
      {props.children}
    </h2>
  );
};

export default Header2;
