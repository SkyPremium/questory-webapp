import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loadingBg from "../assets/images/loading.jpg";

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
      new URL("../assets/images/welcome.jpg", import.meta.url).href,
      new URL("../assets/images/rules.jpg", import.meta.url).href,
      new URL("../assets/images/name.jpg", import.meta.url).href,
      new URL("../assets/images/logo.png", import.meta.url).href,
      new URL("../assets/images/button_welcome.png", import.meta.url).href,
      new URL("../assets/images/button_rules.png", import.meta.url).href,
      new URL("../assets/images/checkbox_checked.png", import.meta.url).href,
      new URL("../assets/images/checkbox_empty.png", import.meta.url).href,
    ]);

    setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);

    const tipTimer = setInterval(() => {
      setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
    }, 3000); // ✅ каждые 3 секунды

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

        {/* 🔁 Полоска загрузки — уже и выше */}
        <foreignObject x="225" y="1085" width="650" height="72">
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              borderRadius: "999px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #ffd66c, #ffeb99)",
                borderRadius: "999px",
                transition: "width 0.3s ease",
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
                fontSize: "32px",
                color: "#ffffff",
                textShadow: "0 0 5px #000, 0 0 8px #000",
              }}
            >
              {progress}%
            </div>
          </div>
        </foreignObject>

        {/* 💬 Подсказка — крупнее, под полосой */}
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
