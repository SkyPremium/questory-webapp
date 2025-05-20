import { useState } from "react";
import rulesBg from "../assets/images/rules.jpg";
import logo from "../assets/images/logo.png";
import buttonAgree from "../assets/images/button_agree.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* 🌫 Размытый фон */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg scale-110"
        style={{ backgroundImage: `url(${rulesBg})` }}
      />

      {/* 🖼 Основное изображение с правилами */}
      <img
        src={rulesBg}
        alt="Фон с правилами"
        className="absolute inset-0 w-full h-full object-fill z-10"
      />

      {/* 🧱 UI: логотип, печать и кнопка */}
      <div className="absolute inset-0 z-20">
        {/* 🔥 Логотип */}
        <div className="absolute left-[50%] top-[5.6%] translate-x-[-50%]">
          <img src={logo} alt="Questory Logo" className="w-[120px]" />
        </div>

        {/* ✅ Галочка */}
        <div
          className="absolute left-[13.5%] bottom-[14.5%] w-[60px] cursor-pointer"
          onClick={() => setChecked(!checked)}
        >
          <img
            src={checked ? checkboxChecked : checkboxEmpty}
            alt="Галочка"
          />
        </div>

        {/* 🟠 Кнопка "Согласен" */}
        <button
          onClick={onAgree}
          disabled={!checked}
          className={`absolute left-1/2 bottom-[7.5%] w-[160px] translate-x-[-50%] pointer-events-auto transition-opacity duration-200 z-30 ${
            checked ? "opacity-100" : "opacity-40 pointer-events-none"
          }`}
        >
          <img src={buttonAgree} alt="Согласен" />
        </button>
      </div>
    </div>
  );
}