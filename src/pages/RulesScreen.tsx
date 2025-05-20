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
    <div className="w-screen h-screen relative overflow-hidden bg-black">
      {/* 📜 Фон на весь экран, без обрезаний */}
      <img
        src={rulesBg}
        alt="Фон"
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      {/* 🧱 UI-элементы поверх фона */}
      <div className="absolute inset-0 z-10 pointer-events-none">

        {/* 🔥 Логотип */}
        <img
          src={logo}
          alt="Логотип"
          className="absolute pointer-events-none"
          style={{
            top: "7.3%",         // от 140px из 1920
            left: "50%",
            transform: "translateX(-50%)",
            width: "22.2%",     // 240px из 1080
            maxWidth: "150px"
          }}
        />

        {/* ✅ Галочка */}
        <div
          onClick={() => setChecked(!checked)}
          className="absolute cursor-pointer pointer-events-auto"
          style={{
            bottom: "12.5%",     // 240 из 1920
            left: "12%",         // 130 из 1080
            width: "10.2%",      // 110 из 1080
            maxWidth: "60px"
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
            bottom: "6.25%",     // 120 из 1920
            left: "50%",
            transform: "translateX(-50%)",
            width: "38.8%",      // 420 из 1080
            maxWidth: "200px"
          }}
        >
          <img src={buttonAgree} alt="Согласен" className="w-full" />
        </button>
      </div>
    </div>
  );
}
