import "./styles/App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./pages/welcome/welcome.jsx";
import Home from "./pages/home/home.jsx";
import FirstJoinSettings from "./pages/firstJoinSettings/firstJoinSettings";

function App() {
  const [isAuth, setIsAuth] = useState(false);
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
