import { useState } from "react";

import buttonAgree from "../assets/images/button_agree.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";
import logo from "../assets/images/logo.png";
import rulesBackground from "../assets/images/rules.jpg";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* 📜 Фон */}
      <img
        src={rulesBackground}
        alt="Правила"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 🔥 Логотип — меньше и ещё выше */}
      <div className="absolute top-[0px] left-1/2 transform -translate-x-1/2 z-10">
        <img src={logo} alt="Questory Logo" className="w-[130px]" />
      </div>

      {/* ✅ Галочка — оставляем как есть */}
      <div
        className="absolute bottom-[64px] left-[32px] z-10 cursor-pointer"
        onClick={() => setChecked(!checked)}
      >
        <img
          src={checked ? checkboxChecked : checkboxEmpty}
          alt="Печать-галочка"
          className="w-[52px]"
        />
      </div>

      {/* 🟫 Кнопка — ещё меньше и ниже */}
      <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={onAgree}
          disabled={!checked}
          className={`transition-opacity duration-200 ${
            checked ? "opacity-100" : "opacity-40 pointer-events-none"
          }`}
        >
          <img
            src={buttonAgree}
            alt="Согласен"
            className="w-[140px]"
          />
        </button>
      </div>
    </div>
  );
}
