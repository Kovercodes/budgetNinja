import { useState } from "react";
import s from "./first-join-settings.module.scss";
import Header2 from "../../components/atoms/Header2/Header2";
import Container from "../../components/atoms/Container/Container";
import InputElement from "../../components/atoms/InputElement/InputElement";
import GlowButton from "../../components/atoms/GlowButton/GlowButton";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../utils/firebaseConfig";
import { getDayOfYear } from "../../utils/getDayOfYear";
import { useNavigate } from "react-router-dom";

const FirstJoinSettings = () => {
  const [name, setName] = useState(auth.currentUser.displayName);
  const [totalMoney, setTotalMoney] = useState();
  const [largePurMoney, setLargePurMoney] = useState();
  const email = auth.currentUser.email;
  const today = getDayOfYear();
  const date = today + 30;

  const navigate = useNavigate();

  const userCollectionRef = collection(db, "users");

  const addUserToDB = async () => {
    console.log("added user", {
      user: { name, email },
      money: { total: totalMoney, largePur: largePurMoney },
      date: { created: today, endMonth: date },
    });
    await addDoc(userCollectionRef, {
      user: { name, email },
      money: { total: totalMoney, largePur: largePurMoney },
      date,
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <Container>
      <Header2>Настройка аккаунта</Header2>
      <InputElement
        placeholder="Например, Иван"
        setState={setName}
        state={name}
        name="userName"
        type="text"
      >
        Как вас зовут?
      </InputElement>
      <InputElement
        placeholder="Например, 9500"
        setState={setTotalMoney}
        state={totalMoney}
        name="totalMoney"
        type="number"
      >
        Сколько вы тратите на повседневные траты каждый месяц?
      </InputElement>
      <InputElement
        placeholder="Например, 4200"
        setState={setLargePurMoney}
        state={largePurMoney}
        name="largePurMoney"
        type="number"
      >
        Сколько вы тратите на крупные покупки каждый месяц?
      </InputElement>
      <GlowButton onClick={(e) => addUserToDB()}>Сохранить</GlowButton>
    </Container>
  );
};

export default FirstJoinSettings;
