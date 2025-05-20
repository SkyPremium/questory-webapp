import { useState } from "react";
import rulesBg from "../assets/images/rules.jpg";
import logo from "../assets/images/logo.png";
import buttonAgree from "../assets/images/button_agree.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {/* 🌍 Ограниченный по аспекту контейнер */}
      <div className="relative w-full max-w-[1080px] aspect-[9/16]">
        {/* 🎨 Фон */}
        <img
          src={rulesBg}
          alt="Фон"
          className="absolute inset-0 w-full h-full object-fill z-0"
        />

        {/* 📊 Логотип */}
        <img
          src={logo}
          alt="Логотип"
          className="absolute top-[5.5%] left-1/2 w-[22%] translate-x-[-50%] z-10"
        />

        {/* ✅ Галочка */}
        <img
          src={checked ? checkboxChecked : checkboxEmpty}
          alt="Галочка"
          onClick={() => setChecked(!checked)}
          className="absolute left-[12%] bottom-[13.5%] w-[10%] cursor-pointer z-10"
        />

        {/* 🔹 Кнопка "Согласен" */}
        <button
          onClick={onAgree}
          disabled={!checked}
          className={`absolute left-1/2 bottom-[6.8%] w-[37%] translate-x-[-50%] z-10 pointer-events-auto transition-opacity duration-200 ${
            checked ? "opacity-100" : "opacity-40 pointer-events-none"
          }`}
        >
          <img src={buttonAgree} alt="Согласен" className="w-full" />
        </button>
      </div>
    </div>
  );
}