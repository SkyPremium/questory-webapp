import React from "react";
import rules from "../assets/images/rules.jpg";
import buttonAgree from "../assets/images/button_agree.png";

export default function RulesScreen() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Фон */}
      <img
        src={rules}
        alt="Правила Questory"
        className="absolute inset-0 w-full h-full object-contain max-h-[calc(100vh-80px)] z-0"
      />

      {/* UI-элементы */}
      <div className="absolute bottom-4 left-0 w-full flex flex-col items-center gap-3 px-4 z-10">
        {/* Галочка */}
        <label className="flex items-center gap-2 text-sm text-white bg-black/40 px-3 py-2 rounded">
          <input
            type="checkbox"
            className="w-5 h-5 accent-yellow-500 border-2 border-yellow-400 rounded-sm"
          />
          Я прочитал и принимаю правила
        </label>

        {/* Кнопка */}
        <button
          onClick={() => console.log("Agree clicked")}
          className="w-[320px] h-[64px] bg-no-repeat bg-contain bg-center active:scale-95 transition-transform"
          style={{
            backgroundImage: `url(${buttonAgree})`,
          }}
        >
          <span className="sr-only">СОГЛАСЕН</span>
        </button>
      </div>
    </div>
  );
}
