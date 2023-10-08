import React from "react";
import Container from "../../components/atoms/Container/Container";
import Header2 from "../../components/atoms/Header2/Header2";
import RegText from "../../components/atoms/RegText/RegText";
import Balances from "../../components/creatures/Balances/Balances";
import ExpenseForm from "../../components/molecules/ExpenseForm/ExpenseForm";
import TodayMoney from "../../components/molecules/TodayMoney/TodayMoney";
import { getDayOfYear } from "../../utils/getDayOfYear";
import { moneyDaily } from "../../utils/moneyDaily";
import { userDataExport as userData } from "../firstJoinSettings/firstJoinSettings";
import s from "./home.module.scss";

const Home = () => {
  const moneyForToday = () => {
    return Math.floor(
      moneyDaily(userData.money.total, getDayOfYear(), userData.date.endPeriod)
    );
  };
  console.log(moneyForToday());

  console.log("userData", userData);

  return (
    <div className={s.home__pageWrapper}>
      <Container>
        <section className={s.home__topTextWrapper}>
          <RegText>Добрый день, {userData.account.name}</RegText>
          <button className={s.home__preferencesBut}>Настройки</button>
        </section>
        <section className={s.home__todayBox}>
          <Header2>На сегодня</Header2>
          <TodayMoney money={moneyForToday()} buttonText="Записать трату" />
        </section>
      </Container>
      <div className={s.home__bottomBox}>
        <Container>
          <Balances
            totalMoney={userData.money.total}
            bigPurMoney={userData.money.largePur}
            days={userData.date.endPeriod - getDayOfYear()}
          />
          <ExpenseForm />
        </Container>
      </div>
    </div>
  );
};

export default Home;
