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
    <div className="w-screen h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* 📜 Контейнер с aspect-ratio 1080x1920 */}
      <div
        className="relative w-full h-full max-h-screen"
        style={{ aspectRatio: "1080 / 1920" }}
      >
        {/* Фон */}
        <img
          src={rulesBg}
          alt="Фон"
          className="absolute inset-0 w-full h-full object-contain z-0"
        />

        {/* UI-элементы, точно позиционированные относительно 1080x1920 */}
        {/* Логотип */}
        <img
          src={logo}
          alt="Логотип"
          className="absolute z-10"
          style={{
            top: `${140 / 1920 * 100}%`,
            left: `50%`,
            transform: "translateX(-50%)",
            width: `${240 / 1080 * 100}%`,
            maxWidth: "150px",
          }}
        />

        {/* Галочка */}
        <div
          onClick={() => setChecked(!checked)}
          className="absolute z-10 cursor-pointer"
          style={{
            left: `${130 / 1080 * 100}%`,
            bottom: `${240 / 1920 * 100}%`,
            width: `${110 / 1080 * 100}%`,
            maxWidth: "60px",
          }}
        >
          <img
            src={checked ? checkboxChecked : checkboxEmpty}
            alt="Галочка"
            className="w-full"
          />
        </div>

        {/* Кнопка "Согласен" */}
        <button
          onClick={onAgree}
          disabled={!checked}
          className={`absolute z-10 transition-opacity duration-200 pointer-events-auto ${
            checked ? "opacity-100" : "opacity-40 pointer-events-none"
          }`}
          style={{
            left: `50%`,
            bottom: `${120 / 1920 * 100}%`,
            transform: "translateX(-50%)",
            width: `${420 / 1080 * 100}%`,
            maxWidth: "200px",
          }}
        >
          <img src={buttonAgree} alt="Согласен" className="w-full" />
        </button>
      </div>
    </div>
  );
}