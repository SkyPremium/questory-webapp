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
    <div
      className="w-screen h-screen flex items-center justify-center bg-black"
      style={{ fontSize: "1.6vw" }} // Базовый масштаб под размер экрана
    >
      <div
        className="relative w-[67.5em] h-[120em] overflow-hidden"
        style={{ backgroundImage: `url(${rulesBg})`, backgroundSize: "100% 100%" }}
      >
        {/* 🔥 Логотип */}
        <img
          src={logo}
          alt="Логотип"
          className="absolute pointer-events-none"
          style={{
            top: "10em",
            left: "50%",
            transform: "translateX(-50%)",
            width: "15em",
          }}
        />

        {/* ✅ Галочка */}
        <div
          onClick={() => setChecked(!checked)}
          className="absolute cursor-pointer"
          style={{
            bottom: "15em",
            left: "8em",
            width: "7em",
          }}
        >
          <img
            src={checked ? checkboxChecked : checkboxEmpty}
            alt="Галочка"
            className="w-full"
          />
        </div>

        {/* 🟠 Кнопка */}
        <button
          onClick={onAgree}
          disabled={!checked}
          className={`absolute transition-opacity duration-200 ${
            checked ? "opacity-100" : "opacity-40 pointer-events-none"
          }`}
          style={{
            bottom: "7em",
            left: "50%",
            transform: "translateX(-50%)",
            width: "26em",
          }}
        >
          <img src={buttonAgree} alt="Согласен" className="w-full" />
        </button>
      </div>
    </div>
  );
}