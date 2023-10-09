import React from "react";
import s from "./popup.module.scss";

const Popup = ({ children, visible }) => {
  const visibilityStyle = {
    display: visible ? "flex" : "none",
  };

  return (
    <div className={s.popup} style={visibilityStyle}>
      <div className={s.popup__container}>{children}</div>
    </div>
  );
};

export default Popup;
