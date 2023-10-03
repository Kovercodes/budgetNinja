import React from "react";
import Container from "../../components/atoms/Container/Container";
import GlowButton from "../../components/atoms/GlowButton/GlowButton";
import Header2 from "../../components/atoms/Header2/Header2";
import MoneyText from "../../components/atoms/MoneyText/MoneyText";
import RegText from "../../components/atoms/RegText/RegText";
import Balances from "../../components/creatures/Balances/Balances";
import Remainder from "../../components/molecules/Remainder/Remainder";
import TodayMoney from "../../components/molecules/TodayMoney/TodayMoney";
import s from "./home.module.scss";

const Home = () => {
  return (
    <div className={s.home__pageWrapper}>
      <Container>
        <section className={s.home__topTextWrapper}>
          <RegText>Добрый день, Александр</RegText>
          <button className={s.home__preferencesBut}>Настройки</button>
        </section>
        <section className={s.home__todayBox}>
          <Header2>На сегодня</Header2>
          <TodayMoney money={350} buttonText="Записать трату" />
        </section>
      </Container>
      <div className={s.home__bottomBox}>
        <Container>
          <Balances totalMoney={4500} bigPurMoney={4000} days={22} />
        </Container>
      </div>
    </div>
  );
};

export default Home;
