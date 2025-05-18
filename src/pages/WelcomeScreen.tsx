import React from "react";
import { useNavigate } from "react-router-dom";
import welcomeBg from "../assets/images/welcome.jpg"; // путь к картинке в src

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/rules"); // Переход ко второй сцене
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Фоновое изображение */}
      <img
        src={welcomeBg}
        alt="Questory Welcome"
        className="w-full h-full object-cover"
      />

      {/* Невидимая кнопка с эффектом нажатия */}
      <div
        onClick={handleStart}
        className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 w-[200px] h-[60px] cursor-pointer rounded-lg transition-all duration-150 active:scale-95 active:bg-black/20"
        title="Начать"
      >
        {/* Для доступности, но визуально скрыто */}
        <span className="sr-only">Начать</span>
      </div>
    </div>
  );
};

export default WelcomeScreen;
