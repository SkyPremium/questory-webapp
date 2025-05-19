import { useState } from "react";

// Картинки из assets (путь от src/pages)
import buttonAgree from "../assets/images/button_agree.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";
import logo from "../assets/images/logo.png";
import rulesBackground from "../assets/images/rules.jpg";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      {/* Фон */}
      <img
        src={rulesBackground}
        alt="Правила"
        className="absolute inset-0 object-cover w-full h-full z-0"
      />

      {/* Логотип */}
      <div className="absolute top-4 left-4 z-10">
        <img src={logo} alt="Questory Logo" className="w-[180px]" />
      </div>

      {/* Чекбокс */}
      <div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={() => setChecked(!checked)}
      >
        <img
          src={checked ? checkboxChecked : checkboxEmpty}
          alt="Чекбокс"
          className="w-[80px]"
        />
      </div>

      {/* Кнопка */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={onAgree}
          disabled={!checked}
          className={`transition-all duration-200 ${
            checked ? "opacity-100" : "opacity-40 pointer-events-none"
          }`}
        >
          <img src={buttonAgree} alt="Согласен" className="w-[250px]" />
        </button>
      </div>
    </div>
  );
}
