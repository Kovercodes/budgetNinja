import "./styles/App.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Welcome from "./pages/welcome/welcome.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
