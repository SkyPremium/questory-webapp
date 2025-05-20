// src/screens/RulesScreen.tsx

import { useState, useEffect, useRef } from "react";
import rulesBg from "../assets/images/rules.jpg";
import logo from "../assets/images/logo.png";
import buttonAgree from "../assets/images/button_agree.png";
import checkboxChecked from "../assets/images/checkbox_checked.png";
import checkboxEmpty from "../assets/images/checkbox_empty.png";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);
  const [bgSize, setBgSize] = useState({ width: 0, height: 0 });
  const bgRef = useRef<HTMLImageElement>(null);

  const BASE_WIDTH = 1080;
  const BASE_HEIGHT = 1920;

  useEffect(() => {
    const updateSize = () => {
      if (bgRef.current) {
        const { offsetWidth, offsetHeight } = bgRef.current;
        setBgSize({ width: offsetWidth, height: offsetHeight });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const scale = (x: number, base: number, actual: number) => (x / base) * actual;

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-black">
      {/* 📜 Фон */}
      <img
        ref={bgRef}
        src={rulesBg}
        alt="Фон"
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      {/* 🧱 UI-элементы */}
      {bgSize.width > 0 && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* 🔥 Логотип */}
          <img
            src={logo}
            alt="Логотип"
            className="absolute pointer-events-none"
            style={{
              top: scale(140, BASE_HEIGHT, bgSize.height),
              left: "50%",
              transform: "translateX(-50%)",
              width: scale(240, BASE_WIDTH, bgSize.width),
              maxWidth: 150,
              position: "absolute"
            }}
          />

          {/* ✅ Галочка */}
          <div
            onClick={() => setChecked(!checked)}
            className="absolute cursor-pointer pointer-events-auto"
            style={{
              bottom: scale(240, BASE_HEIGHT, bgSize.height),
              left: scale(130, BASE_WIDTH, bgSize.width),
              width: scale(110, BASE_WIDTH, bgSize.width),
              maxWidth: 60,
            }}
          >
            <img
              src={checked ? checkboxChecked : checkboxEmpty}
              alt="Галочка"
              className="w-full"
            />
          </div>

          {/* 🟠 Кнопка "Согласен" */}
          <button
            onClick={onAgree}
            disabled={!checked}
            className={`absolute transition-opacity duration-200 pointer-events-auto ${
              checked ? "opacity-100" : "opacity-40 pointer-events-none"
            }`}
            style={{
              bottom: scale(120, BASE_HEIGHT, bgSize.height),
              left: "50%",
              transform: "translateX(-50%)",
              width: scale(420, BASE_WIDTH, bgSize.width),
              maxWidth: 200,
              position: "absolute"
            }}
          >
            <img src={buttonAgree} alt="Согласен" className="w-full" />
          </button>
        </div>
      )}
    </div>
  );
}