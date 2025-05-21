import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loadingBg from "@/assets/images/loading.jpg";

import welcome from "@/assets/images/welcome.jpg";
import rules from "@/assets/images/rules.jpg";
import name from "@/assets/images/name.jpg";
import logo from "@/assets/images/logo.png";
import buttonWelcome from "@/assets/images/button_welcome.png";
import buttonRules from "@/assets/images/button_rules.png";
import checkboxChecked from "@/assets/images/checkbox_checked.png";
import checkboxEmpty from "@/assets/images/checkbox_empty.png";
import buttonName from "@/assets/images/button_name.png";
import nameSave from "@/assets/images/name_save.png";
import nameSave1 from "@/assets/images/button_name_save_1.png";
import nameSave2 from "@/assets/images/button_name_save_2.png";

const preloadImages = (sources: string[]) => {
  sources.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

export default function LoadingScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentTip, setCurrentTip] = useState("");

  const tips = [
    "Распаковываем манускрипты...",
    "Привязываем волшебную нить...",
    "Собираем перья сказочников...",
    "Проверяем чернильницы...",
    "Устанавливаем ловушки...",
    "Зажигаем фонари в подземельях...",
    "Печатаем древние карты...",
  ];

  useEffect(() => {
    preloadImages([
      welcome,
      rules,
      name,
      logo,
      buttonWelcome,
      buttonRules,
      checkboxChecked,
      checkboxEmpty,
      buttonName,
      nameSave,
      nameSave1,
      nameSave2,
    ]);

    setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);

    const tipTimer = setInterval(() => {
      setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
    }, 2000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          clearInterval(tipTimer);
          setTimeout(() => navigate("/welcome"), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => {
      clearInterval(interval);
      clearInterval(tipTimer);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
      <svg
        viewBox="0 0 1080 1920"
        className="w-full h-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="bg"
            patternUnits="userSpaceOnUse"
            width="1080"
            height="1920"
          >
            <image href={loadingBg} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="1080" height="1920" fill="url(#bg)" />

        {/* ✅ Полоска загрузки — расширена, выше, скруглена */}
        <foreignObject x="230" y="1085" width="620" height="65">
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              overflow: "hidden",
              position: "relative",
              borderRadius: "999px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #ffd66c, #ffeb99)",
                transition: "width 0.3s ease",
                borderRadius: "999px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "30px",
                color: "#ffffff",
                textShadow: "0 0 5px #000, 0 0 8px #000",
              }}
            >
              {progress}%
            </div>
          </div>
        </foreignObject>

        {/* 💬 Подсказка */}
        <foreignObject x="140" y="1200" width="800" height="120">
          <div
            style={{
              fontSize: "40px",
              color: "#fff7d5",
              textAlign: "center",
              textShadow: "0 0 5px black",
              lineHeight: "1.2",
            }}
          >
            {currentTip}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
