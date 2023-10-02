import { useState } from "react";
import s from "./first-join-settings.module.scss";
import Header2 from "../../components/atoms/Header2/Header2";
import Container from "../../components/atoms/Container/Container";
import InputElement from "../../components/atoms/InputElement/InputElement";
import GlowButton from "../../components/atoms/GlowButton/GlowButton";
import { db } from "../../utils/firebaseConfig";

const FirstJoinSettings = () => {
  const [name, setName] = useState("");
  return (
    <Container>
      <Header2>Настройка аккаунта</Header2>
      <InputElement
        placeholder="Например, Иван"
        setState={setName}
        state={name}
      >
        Как вас зовут?
      </InputElement>
      <InputElement
        placeholder="Например, 9500"
        setState={setName}
        state={name}
      >
        Сколько вы тратите на повседневные траты каждый месяц?
      </InputElement>
      <InputElement
        placeholder="Например, 4200"
        setState={setName}
        state={name}
      >
        Сколько вы тратите на крупные покупки каждый месяц?
      </InputElement>
      <GlowButton>Сохранить</GlowButton>
    </Container>
  );
};

export default FirstJoinSettings;
