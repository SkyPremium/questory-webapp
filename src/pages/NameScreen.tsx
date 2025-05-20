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
        <rect x="0" y="0" width="1080" height="1920" fill="url(#bg)" />

        {/* Поле ввода */}
        <foreignObject x="190" y="960" width="700" height="120">
          <input
            type="text"
            value={nickname}
            onChange={handleChange}
            placeholder="Введите ник"
            className="w-full h-full text-5xl font-extrabold text-center rounded-xl outline-none 
                       bg-transparent text-yellow-100 placeholder-yellow-400 
                       focus:ring-0 focus:outline-none"
          />
        </foreignObject>

        {/* Ошибка */}
        {error && (
          <foreignObject x="190" y="1060" width="700" height="60">
            <div className="text-red-500 text-center text-3xl font-extrabold">
              {error}
            </div>
          </foreignObject>
        )}

        {/* Кнопка "Продолжить" */}
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
            onMouseDown={e => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            onTouchStart={e => (e.currentTarget.style.transform = "scale(0.95)")}
            onTouchEnd={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={buttonContinue} alt="Продолжить" style={{ width: "100%", height: "100%" }} />
          </button>
        </foreignObject>
      </svg>

      {/* Кастомная модалка */}
      {showConfirm && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-[760px] h-[520px]">
            <img src={confirmBG} alt="Подтверждение" className="w-full h-full object-contain" />

            {/* Никнейм */}
            <div className="absolute left-0 right-0 top-[278px] text-center text-2xl font-bold text-yellow-100">
              {nickname}
            </div>

            {/* Кнопки */}
            <div className="absolute bottom-[60px] w-full flex justify-center gap-6">
              <img
                src={confirmYes}
                alt="Подтвердить"
                className="w-[160px] cursor-pointer transition-transform duration-150 active:scale-95"
                onClick={confirmSubmit}
              />
              <img
                src={confirmNo}
                alt="Отмена"
                className="w-[160px] cursor-pointer transition-transform duration-150 active:scale-95"
                onClick={() => setShowConfirm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
