import { useState } from "react";
import rulesBg from "../assets/images/rules.jpg";
import logo from "../assets/images/logo.png";
import buttonAgree from "../assets/images/button_agree.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      {/* 💡 Контейнер с aspect ratio 3:4 */}
      <div className="relative w-full max-w-[768px]" style={{ aspectRatio: "3 / 4" }}>
        {/* 📜 Фон */}
        <img
          src={rulesBg}
          alt="Правила"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* 🔥 Логотип */}
        <div className="absolute top-[2%] left-1/2 transform -translate-x-1/2 z-10">
          <img
            src={logo}
            alt="Questory Logo"
            className="w-[130px]"
          />
        </div>

        {/* ✅ Галочка */}
        <div
          className="absolute bottom-[12%] left-[9%] z-10 cursor-pointer"
          onClick={() => setChecked(!checked)}
        >
          <img
            src={checked ? checkboxChecked : checkboxEmpty}
            alt="Галочка"
            className="w-[52px]"
          />
        </div>

        {/* 🟫 Кнопка */}
        <div className="absolute bottom-[4%] left-1/2 transform -translate-x-1/2 z-10">
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
    </div>
  );
}
