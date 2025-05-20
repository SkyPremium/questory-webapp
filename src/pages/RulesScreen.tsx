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
    <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Контейнер с фиксированным соотношением 9:16 */}
      <div
        className="relative w-[56.25vh] h-[100vh] max-w-full"
        style={{ aspectRatio: "9 / 16" }}
      >
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
            alt="Questory Logo"
            className="absolute top-[5%] left-1/2 translate-x-[-50%] w-[20%] max-w-[150px] pointer-events-none"
          />

          {/* ✅ Галочка (чекбокс) */}
          <div
            onClick={() => setChecked(!checked)}
            className="absolute left-[10%] bottom-[12%] w-[10%] max-w-[60px] cursor-pointer pointer-events-auto"
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
            className={`absolute bottom-[6%] left-1/2 translate-x-[-50%] w-[40%] max-w-[180px] transition-opacity duration-200 pointer-events-auto ${
              checked ? "opacity-100" : "opacity-40 pointer-events-none"
            }`}
          >
            <img src={buttonAgree} alt="Согласен" className="w-full" />
          </button>
        </div>
      </div>
    </div>
  );
}
