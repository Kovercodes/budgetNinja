import { useState, useEffect } from "react";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import GlowButton from "../../atoms/GlowButton/GlowButton";
import Header2 from "../../atoms/Header2/Header2";
import InputElement from "../../atoms/InputElement/InputElement";
import s from "./expense-form.module.scss";
import RadioGroup from "../RadioGroup/RadioGroup";

const ExpenseForm = () => {
  const [expense, setExpense] = useState(0);
  const [moneySource, setMoneySource] = useState("total");

  console.log(moneySource);
  return (
    <div className={s.expense}>
      <Header2>Записать трату</Header2>
      <InputElement
        type="number"
        state={expense}
        setState={setExpense}
        className={s.expense__input}
        placeholder="Например, 250 рублей"
      ></InputElement>
      <RadioGroup
        options={[
          { label: "Из общего баланса", value: "total" },
          { label: "Из баланса на крупные покупки", value: "largePur" },
        ]}
        selected={moneySource}
        setSelected={setMoneySource}
        name="moneySource"
      />
    </div>
  );
};

export default ExpenseForm;
