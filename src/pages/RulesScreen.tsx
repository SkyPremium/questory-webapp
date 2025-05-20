// src/screens/RulesScreen.tsx

import { useState } from "react";
import rulesBg from "../assets/images/rules.jpg";
import logo from "../assets/images/logo.png";
import buttonAgree from "../assets/images/button_agree.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
      <svg
        viewBox="0 0 1080 1920"
        className="w-full h-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ⬛ Фон через <rect> с pattern */}
        <defs>
          <pattern
            id="bg"
            patternUnits="userSpaceOnUse"
            width="1080"
            height="1920"
          >
            <image href={rulesBg} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="1080" height="1920" fill="url(#bg)" />

        {/* 🔥 Логотип (увеличен) */}
        <image href={logo} x="390" y="120" width="300" height="120" />

        {/* ✅ Галочка / Печать (поднята) */}
        <image
          href={checked ? checkboxChecked : checkboxEmpty}
          x="130"
          y="1520"
          width="110"
          height="110"
          className="cursor-pointer"
          onClick={() => setChecked(!checked)}
        />

        {/* 🟠 Кнопка "Согласен" (шире и выше) */}
        <foreignObject x="300" y="1710" width="480" height="130">
          <button
            onClick={onAgree}
            disabled={!checked}
            style={{
              width: "100%",
              height: "100%",
              opacity: checked ? 1 : 0.4,
              pointerEvents: checked ? "auto" : "none",
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            <img src={buttonAgree} alt="Согласен" style={{ width: "100%", height: "100%" }} />
          </button>
        </foreignObject>
      </svg>
    </div>
  );
}