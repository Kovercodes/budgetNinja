import React from "react";
import { joinClasses } from "../../../utils/joinClasses";
import s from "./container.module.scss";

const Container = (props) => {
  return (
    <div className={joinClasses(s.container, props.className)}>
      {props.children}
    </div>
  );
};

export default Container;
