import React from "react";
import s from "./radio.module.scss";

const Radio = ({ selected, children, onChange, name }) => {
  const randomId = "radio" + Math.floor(Math.random() * 10000);

  return (
    <div className={s.radio}>
      <input
        type="radio"
        id={randomId}
        name={name}
        className={s.radio__input}
        onChange={onChange}
        selected={selected}
      />
      <label htmlFor={randomId} className={s.radio__label}>
        {children}
      </label>
    </div>
  );
};

export default Radio;
