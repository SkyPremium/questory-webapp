import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoadingScreen from "./screens/LoadingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import RulesScreen from "./screens/RulesScreen";
import NameScreen from "./screens/NameScreen";
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
