import { useNavigate } from "react-router-dom";
import { useSound } from "../utils/useSound";
import clickSound from "../assets/sounds/click_ui.mp3";
import transitionSound from "../assets/sounds/transition.mp3";
import welcomeBg from "../assets/images/welcome.jpg";
import buttonWelcome from "../assets/images/button_welcome.png";

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const playClick = useSound(clickSound, 0.8);
  const playTransition = useSound(transitionSound, 0.8);

  const handleStart = () => {
    playClick();
    playTransition();
    navigate("/rules");
  };

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
            <image href={welcomeBg} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="1080" height="1920" fill="url(#bg)" />

        {/* 🟢 Кнопка "Начать" */}
        <foreignObject x="330" y="1720" width="420" height="160">
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
            onMouseDown={e => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            onTouchStart={e => (e.currentTarget.style.transform = "scale(0.95)")}
            onTouchEnd={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={buttonWelcome}
              alt="Начать"
              style={{ width: "100%", height: "100%" }}
            />
          </button>
        </foreignObject>
      </svg>
    </div>
  );
}
