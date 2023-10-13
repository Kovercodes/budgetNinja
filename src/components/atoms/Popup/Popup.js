import React from "react";
import s from "./popup.module.scss";
import GlowButton from "../GlowButton/GlowButton";

const Popup = ({ children, visible, setVisible }) => {
  const visibilityStyle = {
    display: visible ? "flex" : "none",
  };

  return (
    <div className={s.popup} style={visibilityStyle}>
      <div className={s.popup__container}>
        {children}
        <div className={s.popup__buttonBox}>
          <GlowButton
            className={s.popup__quit}
            onClick={() => setVisible(false)}
          >
            Отмена
          </GlowButton>
          <GlowButton
            className={s.popup__submit}
            onClick={() => setVisible(false)}
          >
            Готово
          </GlowButton>
        </div>
      </div>
    </div>
  );
};

export default Popup;
