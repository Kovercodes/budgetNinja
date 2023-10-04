import { useState } from "react";
import s from "./first-join-settings.module.scss";
import Header2 from "../../components/atoms/Header2/Header2";
import Container from "../../components/atoms/Container/Container";
import InputElement from "../../components/atoms/InputElement/InputElement";
import GlowButton from "../../components/atoms/GlowButton/GlowButton";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { db, auth } from "../../utils/firebaseConfig";
import { getDayOfYear } from "../../utils/getDayOfYear";
import { useNavigate } from "react-router-dom";

let userDataExport;

const FirstJoinSettings = () => {
  const [name, setName] = useState(auth.currentUser.displayName);
  const [totalMoney, setTotalMoney] = useState(0);
  const [largePurMoney, setLargePurMoney] = useState(0);
  const email = auth.currentUser.email;
  const today = getDayOfYear();
  const date = today + 30;

  const navigate = useNavigate();

  const userCollectionRef = collection(db, "users");

  let userData;

  getDocs(userCollectionRef).then((snapshot) => {
    let dbEmails = [];
    snapshot.docs.forEach((doc) => {
      dbEmails.push(
        doc._document.data.value.mapValue.fields.account.mapValue.fields.email
          .stringValue
      );
    });
    console.log(dbEmails);
    if (dbEmails.includes(email)) {
      const rawUserData =
        snapshot.docs[dbEmails.indexOf(email)]._document.data.value.mapValue
          .fields;
      userData = {
        account: {
          email: rawUserData.account.mapValue.fields.email.stringValue,
          name: rawUserData.account.mapValue.fields.name.stringValue,
        },
        money: {
          total: parseInt(rawUserData.money.mapValue.fields.total.stringValue),
          largePur: parseInt(
            rawUserData.money.mapValue.fields.largePur.stringValue
          ),
        },
        date: {
          created: parseInt(
            rawUserData.date.mapValue.fields.created.integerValue
          ),
          endPeriod: parseInt(
            rawUserData.date.mapValue.fields.endPeriod.integerValue
          ),
        },
      };
      userDataExport = userData;
      navigate("/");
    } else {
      userData = {
        account: { name, email },
        money: {
          total: totalMoney.toNumber(),
          largePur: largePurMoney.toNumber(),
        },
        date: { created: today, endPeriod: date },
      };
    }
  });

  const addUserToDB = async () => {
    console.log("added user", userData);
    await addDoc(userCollectionRef, userData).then(() => {
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
export { userDataExport };
