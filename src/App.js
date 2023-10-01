import "./styles/App.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./pages/welcome/welcome.jsx";
import Home from "./pages/home/home.jsx";

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
