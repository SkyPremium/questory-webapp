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

      {/* 🌫 Размытый фон позади */}
      <img
        src={rulesBg}
        alt="Размытый фон"
        className="absolute inset-0 w-full h-full object-cover blur-[40px] scale-110 brightness-[1.1] saturate-[1.1] opacity-70 z-0"
      />

      {/* 🧱 Контейнер с оригинальным изображением — без обрезки */}
      <div className="relative w-full max-w-[1080px] max-h-full z-10">
        <img
          src={rulesBg}
          alt="Фон сцены"
          className="w-full h-auto max-h-screen object-contain mx-auto"
        />

        {/* ✅ UI поверх — позиционируется независимо */}
        <div className="absolute inset-0 flex flex-col justify-between z-20">
          {/* 🔥 Логотип */}
          <div className="pt-[4%] flex justify-center">
            <img src={logo} alt="Questory" className="w-[140px]" />
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
    </div>
  );
}
