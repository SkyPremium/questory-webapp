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

      {/* 🔁 Размытый растянутый фон — под основной сценой */}
      <img
        src={rulesBg}
        alt="Размытый фон"
        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-60 z-0"
      />

      {/* 📜 Центральный контейнер 768×1024 */}
      <div className="relative w-full max-w-[768px] aspect-[3/4] z-10">
        {/* Основная сцена */}
        <img
          src={rulesBg}
          alt="Фон сцены"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        {/* UI-контейнер */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between">
          {/* 🔥 Логотип */}
          <div className="pt-[2%] flex justify-center">
            <img src={logo} alt="Questory Logo" className="w-[130px]" />
          </div>

          {/* ✅ Галочка и кнопка */}
          <div className="pb-[3%] flex flex-col items-center gap-4">
            <div onClick={() => setChecked(!checked)} className="cursor-pointer">
              <img
                src={checked ? checkboxChecked : checkboxEmpty}
                alt="Галочка"
                className="w-[52px]"
              />
            </div>

            <button
              onClick={onAgree}
              disabled={!checked}
              className={`transition-opacity duration-200 ${
                checked ? "opacity-100" : "opacity-40 pointer-events-none"
              }`}
            >
              <img src={buttonAgree} alt="Согласен" className="w-[140px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
