import { useState } from "react";
import { joinClasses } from "../../../utils/joinClasses";
import s from "./input-element.module.scss";

const InputElement = ({
  placeholder,
  children,
  className,
  state,
  setState,
  name,
  type,
}) => {
  return (
    <section className={joinClasses(s.inputElement__container, className)}>
      <label className={s.inputElement__label} htmlFor={name}>
        {children}
      </label>
      <input
        className={s.inputElement}
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </section>
  );
};

export default InputElement;
