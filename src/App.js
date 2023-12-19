import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Navigation from "./components/UI/Navigation";
import Main from "./components/pages/Main";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState(0); //0: KOR, 1: ENG

  return (
    <div>
      <Navigation language={language} setLanguage={setLanguage} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login language={language} />} />
          <Route path="/main" element={<Main language={language} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
