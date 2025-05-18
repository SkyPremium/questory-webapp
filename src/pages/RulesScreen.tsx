import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import rulesBg from "../assets/images/rules.jpg";

export default function RulesScreen() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (agreed) navigate("/start"); // замени на путь к следующей сцене
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Фон с изображением */}
      <img
        src={rulesBg}
        alt="Правила"
        className="w-full h-full object-cover"
      />

      {/* Галочка */}
      <label
        className="absolute left-1/2 transform -translate-x-1/2 bottom-28 flex items-center gap-2 text-white bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm"
        style={{ cursor: "pointer" }}
      >
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        Я ознакомлен и принимаю правила
      </label>

      {/* Кнопка */}
      <button
        onClick={handleContinue}
        disabled={!agreed}
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl text-lg font-semibold transition ${
          agreed
            ? "bg-emerald-500 hover:bg-emerald-600 text-white"
            : "bg-gray-500 text-white opacity-50 cursor-not-allowed"
        }`}
      >
        Согласен
      </button>
    </div>
  );
}
