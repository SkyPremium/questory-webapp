import { useState } from "react";
import { useNavigate } from "react-router-dom";

import background from "@/menu/registration/images/NameScreen/name.jpg";
import buttonContinue from "@/menu/registration/images/NameScreen/button_name.png";
import confirmBG from "@/menu/registration/images/NameScreen/name_save.png";
import confirmYes from "@/menu/registration/images/NameScreen/button_name_save_1.png";
import confirmNo from "@/menu/registration/images/NameScreen/button_name_save_2.png";

import { useSound } from "@/menu/registration/sounds/useSound";
import clickSound from "@/menu/registration/sounds/click_ui.mp3";
import blackList from "@/data/blacklist";

export default function NameScreen() {
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const playClick = useSound(clickSound, 0.8);

  const validateNickname = (name: string) => {
    if (name.length < 4) return "Минимум 4 символа";
    if (name.length > 10) return "Максимум 10 символов";
    if (!/^[a-zA-Z0-9_а-яА-ЯёЁ]+$/.test(name)) return "Разрешены только буквы и цифры";
    if (blackList.some(word => name.toLowerCase().includes(word))) return "Недопустимое имя";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
    setError(validateNickname(value));
  };

  const handleSubmit = () => {
    if (!error && nickname) {
      setShowConfirm(true);
    }
  };

  const confirmSubmit = () => {
    playClick();
    setShowConfirm(false);
    navigate("/avatar");
  };

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative">
      <svg
        viewBox="0 0 1080 1920"
        className="w-full h-full absolute top-0 left-0"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="bg" patternUnits="userSpaceOnUse" width="1080" height="1920">
            <image href={background.toString()} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>
        <rect width="1080" height="1920" fill="url(#bg)" />

        {/* 💬 Поле ввода ника */}
        <foreignObject x="190" y="960" width="700" height="120">
          <input
            type="text"
            value={nickname}
            onChange={handleChange}
            placeholder="Введите ник"
            disabled={showConfirm}
            className="w-full h-full text-center rounded-xl outline-none bg-transparent"
            style={{
              fontSize: "52px",
              color: "#fce5a0",
              fontFamily: "Georgia, serif",
              textShadow: "0 0 4px #000",
              fontWeight: 600,
            }}
          />
        </foreignObject>

        {/* ⚠️ Ошибка под полем */}
        {!showConfirm && error && (
          <foreignObject x="190" y="1060" width="700" height="60">
            <div className="text-red-500 text-center text-3xl font-extrabold">
              {error}
            </div>
          </foreignObject>
        )}

        {/* 🔘 Кнопка "Продолжить" */}
        {!showConfirm && (
          <foreignObject x="330" y="1720" width="420" height="160">
            <button
              onClick={() => {
                playClick();
                handleSubmit();
              }}
              disabled={!!error || nickname === ""}
              style={{
                width: "100%",
                height: "100%",
                background: "none",
                border: "none",
                padding: 0,
                transition: "transform 0.15s ease",
                cursor: error || nickname === "" ? "default" : "pointer",
                opacity: error || nickname === "" ? 0.4 : 1,
              }}
              onMouseDown={e => (e.currentTarget.style.transform = "scale(0.95)")}
              onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              onTouchStart={e => (e.currentTarget.style.transform = "scale(0.95)")}
              onTouchEnd={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={buttonContinue}
                alt="Продолжить"
                style={{ width: "100%", height: "100%" }}
              />
            </button>
          </foreignObject>
        )}
      </svg>

      {/* ✅ Подтверждение ника */}
      {showConfirm && (
        <div className="absolute top-0 left-0 w-full h-full z-50 pointer-events-auto">
          <svg viewBox="0 0 1080 1920" className="w-full h-full" preserveAspectRatio="none">
            <image href={confirmBG.toString()} x="20" y="540" width="1040" height="820" />

            <foreignObject x="190" y="915" width="700" height="130">
              <div className="w-full h-full text-center" style={{
                fontSize: "52px",
                fontFamily: "Georgia, serif",
                color: "#fce5a0",
                lineHeight: "130px",
                textShadow: "0 0 4px #000",
                fontWeight: 600,
              }}>
                {nickname}
              </div>
            </foreignObject>

            <foreignObject x="100" y="1120" width="380" height="180">
              <button
                onClick={confirmSubmit}
                className="w-full h-full transition-transform duration-150 active:scale-95"
                style={{ background: "none", border: "none", padding: 0 }}
              >
                <img src={confirmYes} alt="Подтвердить" style={{ width: "100%", height: "100%" }} />
              </button>
            </foreignObject>

            <foreignObject x="600" y="1120" width="380" height="180">
              <button
                onClick={() => {
                  playClick();
                  setShowConfirm(false);
                }}
                className="w-full h-full transition-transform duration-150 active:scale-95"
                style={{ background: "none", border: "none", padding: 0 }}
              >
                <img src={confirmNo} alt="Отмена" style={{ width: "100%", height: "100%" }} />
              </button>
            </foreignObject>
          </svg>
        </div>
      )}
    </div>
  );
}
