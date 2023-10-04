import React from "react";
import s from "./glow-button.module.scss";
import { joinClasses } from "../../../utils/joinClasses";

const GlowButton = (props) => {
  return (
    <button
      className={joinClasses(s.glowButton, props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default GlowButton;
