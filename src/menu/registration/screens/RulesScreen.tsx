import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSound } from "@/utils/useSound";
import clickSound from "@/menu/registration/sounds/click_ui.mp3";

import rulesBg from "@/menu/registration/images/RulesScreen/rules.jpg";
import logo from "@/menu/registration/images/logo.png";
import buttonRules from "@/menu/registration/images/RulesScreen/button_rules.png";
import checkboxChecked from "@/menu/registration/images/RulesScreen/checkbox_checked.png";
import checkboxEmpty from "@/menu/registration/images/RulesScreen/checkbox_empty.png";

export default function RulesScreen() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const playClick = useSound(clickSound, 0.8);

  const handleAgree = () => {
    navigate("/name");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
      <svg
        viewBox="0 0 1080 1920"
        className="w-full h-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 🎨 Фон */}
        <defs>
          <pattern
            id="bg"
            patternUnits="userSpaceOnUse"
            width="1080"
            height="1920"
          >
            <image href={rulesBg.toString()} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="1080" height="1920" fill="url(#bg)" />

        {/* 🔥 Логотип */}
        <image href={logo.toString()} x="0" y="0" width="1080" height="300" />

        {/* ✅ Галочка / Печать */}
        <image
          href={(checked ? checkboxChecked : checkboxEmpty).toString()}
          x="130"
          y="1520"
          width="110"
          height="110"
          className="cursor-pointer"
          onClick={() => {
            playClick();
            setChecked(!checked);
          }}
        />

        {/* 🟠 Кнопка "Согласен" с анимацией */}
        <foreignObject x="280" y="1700" width="520" height="150">
          <button
            onClick={() => {
              playClick();
              handleAgree();
            }}
            disabled={!checked}
            style={{
              width: "100%",
              height: "100%",
              opacity: checked ? 1 : 0.4,
              pointerEvents: checked ? "auto" : "none",
              background: "none",
              border: "none",
              padding: 0,
              transition: "transform 0.15s ease",
              touchAction: "manipulation",
            }}
            onPointerDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            }
            onPointerUp={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
            onPointerLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img
              src={buttonRules}
              alt="Согласен"
              style={{ width: "100%", height: "100%" }}
            />
          </button>
        </foreignObject>
      </svg>
    </div>
  );
}
