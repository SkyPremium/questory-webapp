// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import RulesScreen from "./pages/RulesScreen";
import NameScreen from "./pages/NameScreen"; // ✅ Подключаем экран выбора ника

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/rules" element={<RulesScreen />} />
        <Route path="/name" element={<NameScreen />} /> {/* ✅ Новый маршрут */}
        
        {/* Позже добавишь: */}
        {/* <Route path="/training" element={<TrainingScreen />} /> */}
        {/* <Route path="/menu" element={<MainMenu />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
