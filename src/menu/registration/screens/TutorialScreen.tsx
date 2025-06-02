import { useNavigate } from "react-router-dom";
import { useSound } from "@/menu/registration/sounds/useSound";
import clickSound from "@/menu/registration/sounds/click_ui.mp3";

// 🖼 Фон и кнопка
import tutorialIntroBg from "@/menu/registration/images/TutorialScreen/tutorial_intro.jpg";
import buttonStart from "@/menu/registration/images/TutorialScreen/button_tutorial_start.png";

export default function TutorialScreen() {
  const navigate = useNavigate();
  const playClick = useSound(clickSound, 0.8);

  const handleStart = () => {
    playClick();
    navigate("/tutorial/scene01"); // 👉 Переход на первую сцену обучения
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
            <image href={tutorialIntroBg.toString()} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="1080" height="1920" fill="url(#bg)" />

        {/* 🟠 Кнопка "Начать обучение" — увеличена и приподнята */}
        <foreignObject x="300" y="1660" width="480" height="160">
          <button
            onClick={handleStart}
            style={{
              width: "100%",
              height: "100%",
              background: "none",
              border: "none",
              padding: 0,
              transition: "transform 0.15s ease",
              cursor: "pointer",
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={buttonStart}
              alt="Начать обучение"
              style={{ width: "100%", height: "100%" }}
            />
          </button>
        </foreignObject>
      </svg>
    </div>
  );
}
