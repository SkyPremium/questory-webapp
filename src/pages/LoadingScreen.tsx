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
    // ✅ Предзагрузка фонов и UI
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

    // ✅ Случайная фраза сразу
    setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);

    // ✅ Менять фразу каждые 10 секунд
    const tipTimer = setInterval(() => {
      setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
    }, 10000);

    // ✅ Плавная загрузка
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

        {/* Проценты */}
        <foreignObject x="290" y="1160" width="500" height="100">
          <div
            style={{
              width: "100%",
              height: "100%",
              fontSize: "50px",
              color: "#fff7c0",
              textAlign: "center",
              textShadow: "0 0 5px black",
            }}
          >
            {progress}%
          </div>
        </foreignObject>

        {/* Полоска загрузки */}
        <foreignObject x="190" y="1250" width="700" height="50">
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              borderRadius: "999px",
              overflow: "hidden",
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
          </div>
        </foreignObject>

        {/* Фраза */}
        <foreignObject x="140" y="1350" width="800" height="100">
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
