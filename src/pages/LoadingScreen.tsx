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
  const [progress, setProgress] = useState(0);
  const [currentTip, setCurrentTip] = useState("Играйте каждый день и получайте награды!");
  const navigate = useNavigate();

  useEffect(() => {
    preloadImages([
      welcome, rules, name, logo,
      buttonWelcome, buttonRules,
      checkboxChecked, checkboxEmpty,
      buttonName, nameSave, nameSave1, nameSave2
    ]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 10, 100);
        return parseFloat(next.toFixed(1));
      });
    }, 100);

    const tips = [
      "Играйте каждый день и получайте награды!",
      "Получите титулы за достижения и бонусы!",
      "Будьте осторожны — смерть отбрасывает вас в начало книги!"
    ];

    const tipInterval = setInterval(() => {
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      setCurrentTip(randomTip);
    }, 2000);

    const timeout = setTimeout(() => {
      navigate("/welcome");
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(tipInterval);
      clearTimeout(timeout);
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
          <pattern id="bg" patternUnits="userSpaceOnUse" width="1080" height="1920">
            <image href={loadingBg} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="1080" height="1920" fill="url(#bg)" />

        {/* 🔄 Прогрессбар */}
        <foreignObject x="140" y="1080" width="800" height="100">
          <div
            style={{
              height: "100%",
              width: "100%",
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

        {/* 💬 Подсказка — под полоской */}
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
