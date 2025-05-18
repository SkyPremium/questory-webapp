// src/pages/WelcomeScreen.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/menu");
  };

  return (
    <div className="relative w-full h-full">
      {/* Фоновое изображение на всю сцену */}
      <img
        src="/assets/images/welcome.jpg"
        alt="Welcome"
        className="w-full h-full object-cover"
      />

      {/* Невидимая кнопка поверх кнопки на изображении */}
      <button
        onClick={handleStartClick}
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[180px] h-[60px] rounded-xl focus:outline-none"
        style={{ backgroundColor: "transparent" }}
      >
        {/* Можно добавить эффект наведения */}
        <span className="sr-only">Начать</span>
      </button>
    </div>
  );
};

export default WelcomeScreen;
