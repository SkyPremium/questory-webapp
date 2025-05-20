import { useState } from "react";
import rulesBg from "../assets/images/rules.jpg";
import logo from "../assets/images/logo.png";
import buttonAgree from "../assets/images/button_agree.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Фон */}
      <img
        src={rulesBg}
        alt="Фон"
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      {/* UI поверх */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-between px-[5vw] py-[3vh]">
        {/* Логотип */}
        <div className="flex justify-center w-full">
          <img src={logo} alt="Questory Logo" className="w-[22vw] max-w-[140px]" />
        </div>

        {/* Галочка и кнопка */}
        <div className="flex flex-col items-center gap-[2vh] mb-[2vh]">
          {/* Галочка (печать) */}
          <div
            onClick={() => setChecked(!checked)}
            className="cursor-pointer pointer-events-auto"
          >
            <img
              src={checked ? checkboxChecked : checkboxEmpty}
              alt="Галочка"
              className="w-[12vw] max-w-[60px]"
            />
          </div>

          {/* Кнопка */}
          <button
            onClick={onAgree}
            disabled={!checked}
            className={`pointer-events-auto transition-opacity duration-200 ${
              checked ? "opacity-100" : "opacity-40 pointer-events-none"
            }`}
          >
            <img src={buttonAgree} alt="Согласен" className="w-[36vw] max-w-[180px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
