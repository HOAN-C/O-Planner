import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Navigation from "./components/UI/Navigation";
import Main from "./components/pages/Main";
import SurveyForm from "./components/pages/SurveyForm";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState(0);

  return (
    <div>
      <Navigation language={language} setLanguage={setLanguage} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main/surveyForm" element={<SurveyForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
