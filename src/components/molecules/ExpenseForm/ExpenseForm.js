import { useState, useEffect } from "react";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import GlowButton from "../../atoms/GlowButton/GlowButton";
import Header2 from "../../atoms/Header2/Header2";
import InputElement from "../../atoms/InputElement/InputElement";
import s from "./expense-form.module.scss";

const ExpenseForm = () => {
  const [expense, setExpense] = useState(0);
  const [isFromTotal, setIsFromTotal] = useState(true);
  const [isFromLargePur, setIsFromLargePur] = useState(false);

  useEffect(() => {
    if (isFromTotal && isFromLargePur) {
      setIsFromLargePur(false);
    }
    if (!isFromTotal && !isFromLargePur) {
      setIsFromTotal(true);
    }
  }, [isFromTotal, isFromLargePur]);

  return (
    <div className={s.expense}>
      <Header2>Записать трату</Header2>
      <InputElement
        state={expense}
        setState={setExpense}
        className={s.expense__input}
        placeholder="Например, 250 рублей"
      ></InputElement>
      <Checkbox
        nameId="totalBalance"
        state={isFromTotal}
        setState={setIsFromTotal}
      >
        Из общего баланса
      </Checkbox>
      <Checkbox
        nameId="largePurBalance"
        state={isFromLargePur}
        setState={setIsFromLargePur}
      >
        Из баланса на крупные покупки
      </Checkbox>
      <div className={s.expense__buttonBox}>
        <GlowButton className={s.expense__quit}>Отмена</GlowButton>
        <GlowButton className={s.expense__submit}>Готово</GlowButton>
      </div>
    </div>
  );
};

export default ExpenseForm;
