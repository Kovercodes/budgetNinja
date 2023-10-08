import React from "react";
import s from "./checkbox.module.scss";

const Checkbox = ({ nameId, children, checked, state, setState }) => {
  const handleCheckboxChange = () => {
    setState(!state);
  };

  return (
    <div className={s.checkbox}>
      <input
        type="checkbox"
        name={nameId}
        id={nameId}
        className={s.checkbox__input}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={nameId} className={s.checkbox__label}>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
