import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loadingBg from "@/assets/images/loading.jpg";

export default function LoadingScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

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
    // 🔄 Предзагрузка всех важных изображений
    const preloadImages = [
      'logo.png',
      'button_rules.png',
      'checkbox_checked.png',
      'checkbox_empty.png',
      'welcome.jpg',
      'rules.jpg',
      'name.jpg',
      'button_name.png',
      'name_save.png',
      'button_name_save_1.png',
      'button_name_save_2.png',
    ];
    preloadImages.forEach((img) => {
      const i = new Image();
      i.src = `/assets/images/${img}`;
    });

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate("/welcome"), 500);
          return 100;
        }
        return prev + 1;
      });
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 40);
    return () => clearInterval(interval);
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

        {/* Подсказка */}
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
            {tips[tipIndex]}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
