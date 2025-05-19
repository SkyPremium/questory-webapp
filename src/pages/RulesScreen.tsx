import React, { useState } from "react";
import rules from "../assets/images/rules.jpg";
import buttonAgree from "../assets/images/button_agree.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";

export default function RulesScreen() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={rules}
        alt="Правила Questory"
        className="absolute inset-0 w-full h-full object-contain max-h-[calc(100vh-80px)] z-0"
      />

      <div className="absolute bottom-4 left-0 w-full flex flex-col items-center gap-4 px-4 z-10">
        {/* Стилизованная галочка */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setAgreed(!agreed)}
        >
          <img
            src={agreed ? checkboxChecked : checkboxEmpty}
            alt="галочка"
            className="w-10 h-10"
          />
          <span className="text-white text-sm bg-black/40 px-3 py-1 rounded">
            Я прочитал и принимаю правила
          </span>
        </div>

        {/* Кастомная кнопка */}
        <button
          disabled={!agreed}
          className="w-[320px] h-[64px] bg-no-repeat bg-contain bg-center active:scale-95 transition-transform"
          style={{
            backgroundImage: `url(${buttonAgree})`,
            opacity: agreed ? 1 : 0.5,
            pointerEvents: agreed ? "auto" : "none",
          }}
        >
          <span className="sr-only">СОГЛАСЕН</span>
        </button>
      </div>
    </div>
  );
}
