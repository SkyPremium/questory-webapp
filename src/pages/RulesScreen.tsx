import { useState } from "react";
import rulesBg from "../assets/images/rules.jpg";
import logo from "../assets/images/logo.png";
import buttonAgree from "../assets/images/button_agree.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-black overflow-hidden">

      {/* 🌫 Размытый задний фон (растянутый на экран) */}
      <img
        src={rulesBg}
        alt="Размытый фон"
        className="absolute inset-0 w-full h-full object-cover blur-[40px] scale-110 brightness-[1.1] saturate-[1.1] opacity-70 z-0"
      />

      {/* 🧱 Центральный блок 1080×1920 с aspect-[9/16] */}
      <div className="relative w-full max-w-[1080px] aspect-[9/16] z-10">
        {/* Чёткое изображение сцены */}
        <img
          src={rulesBg}
          alt="Фон сцены"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        {/* UI-контейнер */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between">
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
    </div>
  );
}
