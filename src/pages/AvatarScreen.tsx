import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSound } from "../utils/useSound";
import clickSound from "../assets/sounds/click_ui.mp3";

// 🖼️ Изображения
import background from "../assets/images/avatar.jpg";
import avatarFrame from "../assets/images/avatar_2.png";
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

export default function AvatarScreen() {
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
            <image href={background} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="1080" height="1920" fill="url(#bg)" />

        {/* 🎴 Карусель из 3 аватаров */}
        {[-1, 0, 1].map((offset) => {
          const avatarIndex = (index + offset + avatars.length) % avatars.length;
          const xOffset = 300 + offset * 250;
          const scale = offset === 0 ? 1.1 : 0.85;
          const opacity = offset === 0 ? 1 : 0.6;

          return (
            <g
              key={avatarIndex}
              transform={`translate(${xOffset}, 700) scale(${scale})`}
              style={{ transition: "all 0.5s ease" }}
            >
              <image href={avatarFrame} width="220" height="240" />
              <image
                href={avatars[avatarIndex].image}
                x="4"
                y="4"
                width="212"
                height="212"
                opacity={opacity}
              />
            </g>
          );
        })}

        {/* 🏷️ Имя аватара */}
        <foreignObject x="290" y="960" width="500" height="60">
          <div className="text-center text-white text-xl font-semibold">
            {avatars[index].name}
          </div>
        </foreignObject>

        {/* ⬅️ Стрелка влево */}
        <image
          href={arrowLeft}
          x="200"
          y="1060"
          width="80"
          height="80"
          className="cursor-pointer"
          onClick={prevAvatar}
        />

        {/* ➡️ Стрелка вправо */}
        <image
          href={arrowRight}
          x="800"
          y="1060"
          width="80"
          height="80"
          className="cursor-pointer"
          onClick={nextAvatar}
        />

        {/* 🔘 Кнопка "Подробнее" */}
        <image
          href={buttonDetails}
          x="300"
          y="1170"
          width="480"
          height="110"
          className="cursor-pointer"
        />

        {/* 🟪 Кнопка "Выбрать" */}
        <image
          href={buttonSelect}
          x="300"
          y="1300"
          width="480"
          height="110"
          className="cursor-pointer"
          onClick={handleSelect}
        />
      </svg>
    </div>
  );
}
