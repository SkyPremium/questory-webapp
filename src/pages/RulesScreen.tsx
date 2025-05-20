import { useState } from "react";
import rulesBg from "../assets/images/rules.jpg";
import logo from "../assets/images/logo.png";
import buttonAgree from "../assets/images/button_agree.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 📜 Фоновое изображение */}
      <img
        src={rulesBg}
        alt="Фон"
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      {/* 🧱 UI-элементы */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between pointer-events-none">

        {/* 🔥 Логотип */}
        <div className="flex justify-center mt-[2vh]">
          <img src={logo} alt="Questory Logo" className="w-[22vw] max-w-[150px] pointer-events-none" />
        </div>

        {/* ✅ Галочка и кнопка */}
        <div className="relative mb-[4vh] flex flex-col items-center gap-[2vh]">
          {/* 🟤 Печать (чекбокс) */}
          <div
            onClick={() => setChecked(!checked)}
            className="absolute left-[10vw] bottom-[9vh] w-[11vw] max-w-[60px] cursor-pointer pointer-events-auto"
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
            className={`pointer-events-auto transition-opacity duration-200 w-[40vw] max-w-[180px] ${
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