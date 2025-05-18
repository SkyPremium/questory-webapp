// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import RulesScreen from "./pages/RulesScreen";
// Подключи другие экраны позже (TrainingScreen, MainMenu и т.д.)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/rules" element={<RulesScreen />} />
        {/* Добавишь позже:
        <Route path="/training" element={<TrainingScreen />} />
        <Route path="/menu" element={<MainMenu />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
