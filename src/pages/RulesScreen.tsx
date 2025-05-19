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

      {/* 🌫 Левая размытие-зона */}
      <div className="absolute left-0 top-0 bottom-0 w-[max(0px,calc(50%-384px))] z-0 overflow-hidden">
        <img
          src={rulesBg}
          className="w-full h-full object-cover blur-md scale-125 opacity-40"
          alt=""
        />
      </div>

      {/* 🌫 Правая размытие-зона */}
      <div className="absolute right-0 top-0 bottom-0 w-[max(0px,calc(50%-384px))] z-0 overflow-hidden">
        <img
          src={rulesBg}
          className="w-full h-full object-cover blur-md scale-125 opacity-40"
          alt=""
        />
      </div>

      {/* 🌫 Верхнее размытие-зона */}
      <div className="absolute top-0 left-0 right-0 h-[max(0px,calc(50%-512px))] z-0 overflow-hidden">
        <img
          src={rulesBg}
          className="w-full h-full object-cover blur-md scale-125 opacity-40"
          alt=""
        />
      </div>

      {/* 🌫 Нижнее размытие-зона */}
      <div className="absolute bottom-0 left-0 right-0 h-[max(0px,calc(50%-512px))] z-0 overflow-hidden">
        <img
          src={rulesBg}
          className="w-full h-full object-cover blur-md scale-125 opacity-40"
          alt=""
        />
      </div>

      {/* 📜 Центральный контейнер 3:4 */}
      <div className="relative w-full max-w-[768px]" style={{ aspectRatio: "3 / 4" }}>
        {/* Фон */}
        <img
          src={rulesBg}
          alt="Правила"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* UI-контейнер */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between">
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
