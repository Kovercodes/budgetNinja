import { useState } from "react";
import { joinClasses } from "../../../utils/joinClasses";
import s from "./input-element.module.scss";

const InputElement = ({
  placeholder,
  children,
  className,
  state,
  setState,
}) => {
  const uniqueID = Date.now;
  return (
    <section className={joinClasses(s.inputElement__container, className)}>
      <label className={s.inputElement__label} htmlFor={uniqueID}>
        {children}
      </label>
      <input
        className={s.inputElement}
        type="text"
        placeholder={placeholder}
        id={uniqueID}
        name={uniqueID}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </section>
  );
};

export default InputElement;
