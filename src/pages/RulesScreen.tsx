// src/screens/RulesScreen.tsx

import { useState } from "react";
import rulesBg from "../assets/images/rules.jpg";
import logo from "../assets/images/logo.png";
import buttonAgree from "../assets/images/button_agree.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-black">
      {/* 📜 Фон */}
      <img
        src={rulesBg}
        alt="Фон"
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      {/* 🧱 UI-элементы */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* 🔥 Логотип */}
        <img
          src={logo}
          alt="Логотип"
          className="absolute pointer-events-none"
          style={{
            top: `${140 / 1920 * 100}%`,       // 140px от 1920
            left: "50%",
            transform: "translateX(-50%)",
            width: `${240 / 1080 * 100}%`,     // 240px от 1080
            maxWidth: "150px",
          }}
        />

        {/* ✅ Галочка */}
        <div
          onClick={() => setChecked(!checked)}
          className="absolute cursor-pointer pointer-events-auto"
          style={{
            bottom: `${240 / 1920 * 100}%`,    // 240px от 1920
            left: `${130 / 1080 * 100}%`,      // 130px от 1080
            width: `${110 / 1080 * 100}%`,     // 110px от 1080
            maxWidth: "60px",
          }}
        >
          <img
            src={checked ? checkboxChecked : checkboxEmpty}
            alt="Галочка"
            className="w-full"
          />
        </div>

        {/* 🟠 Кнопка "Согласен" */}
        <button
          onClick={onAgree}
          disabled={!checked}
          className={`absolute transition-opacity duration-200 pointer-events-auto ${
            checked ? "opacity-100" : "opacity-40 pointer-events-none"
          }`}
          style={{
            bottom: `${120 / 1920 * 100}%`,    // 120px от 1920
            left: "50%",
            transform: "translateX(-50%)",
            width: `${420 / 1080 * 100}%`,     // 420px от 1080
            maxWidth: "200px",
          }}
        >
          <img src={buttonAgree} alt="Согласен" className="w-full" />
        </button>
      </div>
    </div>
  );
}
