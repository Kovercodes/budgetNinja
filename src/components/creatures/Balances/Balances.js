import React from "react";
import s from "./balances.module.scss";
import RemainderBox from "../RemainderBox/RemainderBox";

const Balances = ({ totalMoney, bigPurMoney, days, openPref }) => {
  return (
    <div className={s.fullWrapper}>
      <RemainderBox
        money={totalMoney}
        days={days}
        name="Остаток"
        openPref={openPref}
      />
      <RemainderBox
        money={bigPurMoney}
        days={days}
        name="Крупные покупки"
        openPref={openPref}
      />
    </div>
  );
};

export default Balances;
