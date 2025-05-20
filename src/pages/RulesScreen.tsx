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

      {/* 🌫 Фон на весь экран, без обрезки (может немного искажаться) */}
      <img
        src={rulesBg}
        alt="Фон"
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      {/* 🔧 UI поверх — независимо от фона */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between">
        {/* 🔥 Логотип */}
        <div className="pt-[4%] flex justify-center">
          <img src={logo} alt="Questory Logo" className="w-[140px]" />
        </div>

        {/* ✅ Галочка и кнопка */}
        <div className="pb-[5%] flex flex-col items-center gap-4">
          <div onClick={() => setChecked(!checked)} className="cursor-pointer">
            <img
              src={checked ? checkboxChecked : checkboxEmpty}
              alt="Галочка"
              className="w-[54px]"
            />
          </div>

          <button
            onClick={onAgree}
            disabled={!checked}
            className={`transition-opacity duration-200 ${
              checked ? "opacity-100" : "opacity-40 pointer-events-none"
            }`}
          >
            <img src={buttonAgree} alt="Согласен" className="w-[150px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
