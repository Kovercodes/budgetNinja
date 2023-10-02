import "./styles/App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./pages/welcome/welcome.jsx";
import Home from "./pages/home/home.jsx";
import FirstJoinSettings from "./pages/firstJoinSettings/firstJoinSettings";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebaseConfig";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/welcome";
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome setIsAuth={setIsAuth} />} />
        <Route path="/start-settings" element={<FirstJoinSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
