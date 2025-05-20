import { useState } from "react";
import rulesBg from "../assets/images/rules.jpg";
import logo from "../assets/images/logo.png";
import buttonAgree from "../assets/images/button_agree.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* 🌫 Фон на весь экран */}
      <img
        src={rulesBg}
        alt="Фон"
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      {/* 🧱 UI поверх */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between pointer-events-none">

        {/* 🔥 Логотип — чуть меньше */}
        <div className="pt-[0.5%] flex justify-center pointer-events-none">
          <img src={logo} alt="Questory Logo" className="w-[120px]" />
        </div>

        {/* ✅ Галочка и кнопка */}
        <div className="pb-[5%] relative flex flex-col items-center gap-4">
          
          {/* 🟤 Печать — ещё левее */}
          <div
            onClick={() => setChecked(!checked)}
            className="absolute left-[9%] bottom-[72px] cursor-pointer pointer-events-auto"
          >
            <img
              src={checked ? checkboxChecked : checkboxEmpty}
              alt="Галочка"
              className="w-[58px]"
            />
          </div>

          {/* 🟠 Кнопка "Согласен" */}
          <button
            onClick={onAgree}
            disabled={!checked}
            className={`pointer-events-auto transition-opacity duration-200 ${
              checked ? "opacity-100" : "opacity-40 pointer-events-none"
            }`}
          >
            <img src={buttonAgree} alt="Согласен" className="w-[160px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
