import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoadingScreen from "./pages/LoadingScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
import RulesScreen from "./pages/RulesScreen";
import NameScreen from "./pages/NameScreen";
// добавляй дальше другие экраны...

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Стартовый экран */}
        <Route path="/" element={<LoadingScreen />} />

        {/* 🟠 Переход к следующим сценам */}
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/rules" element={<RulesScreen />} />
        <Route path="/name" element={<NameScreen />} />

        {/* 👉 Перенаправление на загрузку по умолчанию */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
