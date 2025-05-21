import { useState } from "react";
import background from "../assets/images/name.jpg";
import buttonContinue from "../assets/images/button_name.png";
import confirmBG from "../assets/images/name_save.png";
import confirmYes from "../assets/images/button_name_save_1.png";
import confirmNo from "../assets/images/button_name_save_2.png";
import blackList from "../utils/blacklist";

export default function NameScreen({ onSubmit }: { onSubmit: (nickname: string) => void }) {
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

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
    setShowConfirm(false);
    onSubmit(nickname);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden relative">
      <svg
        viewBox="0 0 1080 1920"
        className="w-full h-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="bg" patternUnits="userSpaceOnUse" width="1080" height="1920">
            <image href={background} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>
        <rect width="1080" height="1920" fill="url(#bg)" />

        {/* Поле ввода ника (в стиле подтверждения) */}
        <foreignObject x="190" y="960" width="700" height="120">
          <input
            type="text"
            value={nickname}
            onChange={handleChange}
            placeholder="Введите ник"
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

        {/* Сообщение об ошибке */}
        {error && (
          <foreignObject x="190" y="1060" width="700" height="60">
            <div className="text-red-500 text-center text-3xl font-extrabold">
              {error}
            </div>
          </foreignObject>
        )}

        {/* Кнопка продолжить */}
        <foreignObject x="330" y="1720" width="420" height="160">
          <button
            onClick={handleSubmit}
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
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={buttonContinue} alt="Продолжить" style={{ width: "100%", height: "100%" }} />
          </button>
        </foreignObject>

        {/* Модалка подтверждения ника */}
        {showConfirm && (
          <>
            {/* 📜 Табличка */}
            <image href={confirmBG} x="20" y="540" width="1040" height="820" />

            {/* ✏️ Ник — чуть ниже и стилизован */}
            <foreignObject x="190" y="930" width="700" height="130">
              <div
                className="w-full h-full text-center"
                style={{
                  fontSize: "52px",
                  fontFamily: "Georgia, serif",
                  color: "#fce5a0",
                  lineHeight: "130px",
                  textShadow: "0 0 4px #000",
                  fontWeight: 600,
                }}
              >
                {nickname}
              </div>
            </foreignObject>

            {/* ✅ Подтвердить */}
            <foreignObject x="100" y="1120" width="380" height="180">
              <button
                onClick={confirmSubmit}
                className="w-full h-full transition-transform duration-150 active:scale-95"
                style={{ background: "none", border: "none", padding: 0 }}
              >
                <img src={confirmYes} alt="Подтвердить" style={{ width: "100%", height: "100%" }} />
              </button>
            </foreignObject>

            {/* ❌ Отмена */}
            <foreignObject x="600" y="1120" width="380" height="180">
              <button
                onClick={() => setShowConfirm(false)}
                className="w-full h-full transition-transform duration-150 active:scale-95"
                style={{ background: "none", border: "none", padding: 0 }}
              >
                <img src={confirmNo} alt="Отмена" style={{ width: "100%", height: "100%" }} />
              </button>
            </foreignObject>
          </>
        )}
      </svg>
    </div>
  );
}
