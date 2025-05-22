import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSound } from "../utils/useSound";
import clickSound from "../assets/sounds/click_ui.mp3";

// 🖼️ Изображения
import background from "../assets/images/avatar.jpg";
import frame from "../assets/images/avatar_2.png";
import arrowLeft from "../assets/images/button_avatar_3.png";
import arrowRight from "../assets/images/button_avatar_4.png";
import buttonSelect from "../assets/images/button_avatar_2.png";
import buttonDetails from "../assets/images/button_avatar_1.png";

// 🎴 Аватары
import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import avatar4 from "../assets/avatars/avatar4.png";
import avatar5 from "../assets/avatars/avatar5.png";

const avatars = [
  {
    name: "Эрик, юный герой",
    image: avatar1,
  },
  {
    name: "Кай, странник",
    image: avatar2,
  },
  {
    name: "Тельма, травница",
    image: avatar3,
  },
  {
    name: "Авиэль, эльфийка",
    image: avatar4,
  },
  {
    name: "Лео, ученик мага",
    image: avatar5,
  },
];

export default function AvatarSelection() {
  const navigate = useNavigate();
  const playClick = useSound(clickSound, 0.8);
  const [index, setIndex] = useState(0);

  const nextAvatar = () => {
    playClick();
    setIndex((prev) => (prev + 1) % avatars.length);
  };

  const prevAvatar = () => {
    playClick();
    setIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
  };

  const handleSelect = () => {
    playClick();
    navigate("/training");
  };

  const getAvatarStyle = (i: number) => {
    const offset = i - index;
    if (offset === 0) {
      return {
        transform: "scale(1)",
        opacity: 1,
        zIndex: 2,
      };
    } else if (Math.abs(offset) === 1 || Math.abs(offset) === avatars.length - 1) {
      return {
        transform: `scale(0.75) translateX(${offset * 200}px)`,
        opacity: 0.5,
        zIndex: 1,
      };
    } else {
      return {
        display: "none",
      };
    }
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
          <pattern id="bg" patternUnits="userSpaceOnUse" width="1080" height="1920">
            <image href={background} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="1080" height="1920" fill="url(#bg)" />

        {/* 🎴 Аватары с карусельным эффектом */}
        <foreignObject x="0" y="500" width="1080" height="520">
          <div
            style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
          >
            {avatars.map((avatar, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: 512,
                  height: 512,
                  transition: "all 0.5s ease",
                  ...getAvatarStyle(i),
                }}
              >
                <img src={frame} alt="frame" width="512" height="512" style={{ position: "absolute", top: 0, left: 0 }} />
                <img
                  src={avatar.image}
                  alt="avatar"
                  width="512"
                  height="512"
                  style={{ borderRadius: 0, position: "absolute", top: 0, left: 0 }}
                />
              </div>
            ))}
          </div>
        </foreignObject>

        {/* 🏷️ Имя */}
        <foreignObject x="280" y="1060" width="520" height="60">
          <div className="text-center text-white text-xl font-semibold">
            {avatars[index].name}
          </div>
        </foreignObject>

        {/* ⬅️ Стрелка влево */}
        <image
          href={arrowLeft}
          x="280"
          y="1140"
          width="60"
          height="60"
          className="cursor-pointer"
          onClick={prevAvatar}
        />

        {/* ➡️ Стрелка вправо */}
        <image
          href={arrowRight}
          x="740"
          y="1140"
          width="60"
          height="60"
          className="cursor-pointer"
          onClick={nextAvatar}
        />

        {/* 🔘 Кнопка "Подробнее" */}
        <image
          href={buttonDetails}
          x="300"
          y="1220"
          width="480"
          height="100"
          className="cursor-pointer"
        />

        {/* 🟪 Кнопка "Выбрать" */}
        <image
          href={buttonSelect}
          x="300"
          y="1340"
          width="480"
          height="100"
          className="cursor-pointer"
          onClick={handleSelect}
        />
      </svg>
    </div>
  );
}
