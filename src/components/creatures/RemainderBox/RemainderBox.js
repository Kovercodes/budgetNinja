import React from "react";
import s from "./remainder-box.module.scss";
import Header2 from "../../atoms/Header2/Header2";
import Remainder from "../../molecules/Remainder/Remainder";

const RemainderBox = ({ money, days, name, openPref }) => {
  return (
    <div className={s.remainderBox}>
      <Header2>{name}</Header2>
      <Remainder money={money} days={days} openPref />
    </div>
  );
};

export default RemainderBox;
