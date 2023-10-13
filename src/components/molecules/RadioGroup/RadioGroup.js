import React, { useState } from "react";
import s from "./radio-group.module.scss";
import Radio from "../../atoms/Radio/Radio";

const RadioGroup = ({ options, selected, setSelected, name }) => {
  return (
    <div className={s.radioGroup}>
      {options.map((option, index) => (
        <Radio
          key={index}
          selected={selected === option.value}
          onChange={() => setSelected(option.value)}
          name={name}
        >
          {option.label}
        </Radio>
      ))}
    </div>
  );
};

export default RadioGroup;
