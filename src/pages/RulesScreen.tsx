import { useState } from "react";
import FullScreenScene from "../components/FullScreenScene";

import rulesBg from "../assets/images/rules.jpg";
import logo from "../assets/images/logo.png";
import buttonAgree from "../assets/images/button_agree.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <FullScreenScene background={rulesBg}>
      {/* 🔥 Логотип */}
      <div className="w-full pt-[1vh] flex justify-center">
        <img
          src={logo}
          alt="Questory Logo"
          className="w-[18%] min-w-[100px] max-w-[160px]"
        />
      </div>

      {/* ✅ Галочка и кнопка — низ */}
      <div className="w-full pb-[2vh] flex flex-col items-center gap-4">
        <div onClick={() => setChecked(!checked)} className="cursor-pointer">
          <img
            src={checked ? checkboxChecked : checkboxEmpty}
            alt="Печать"
            className="w-[50px]"
          />
        </div>

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
    </FullScreenScene>
  );
}
