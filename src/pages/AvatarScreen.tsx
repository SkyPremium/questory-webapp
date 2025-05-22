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

        {/* 🎴 Аватары-карусель */}
        {avatars.map((avatar, i) => {
          const offset = i - index;
          let x = 540 + offset * 300;
          if (offset === -avatars.length + 1) x = 540 + 300;
          if (offset === avatars.length - 1) x = 540 - 300;
          const scale = i === index ? 1 : 0.7;
          const opacity = i === index ? 1 : 0.6;
          return (
            <g
              key={i}
              style={{
                transition: "transform 0.5s, opacity 0.5s",
                transform: `translate(${x - 260}px, 500px) scale(${scale})`,
                opacity,
              }}
            >
              <image href={avatarFrame} x="0" y="0" width="520" height="520" />
              <image href={avatar.image} x="4" y="4" width="512" height="512" />
            </g>
          );
        })}

        {/* 🏷️ Имя */}
        <foreignObject x="280" y="1060" width="520" height="60">
          <div className="text-center text-white text-xl font-semibold">
            {avatars[index].name}
          </div>
        </foreignObject>

        {/* ⬅️ Стрелка влево */}
        <image
          href={arrowLeft}
          x="250"
          y="1160"
          width="80"
          height="80"
          className="cursor-pointer"
          onClick={prevAvatar}
        />

        {/* ➡️ Стрелка вправо */}
        <image
          href={arrowRight}
          x="750"
          y="1160"
          width="80"
          height="80"
          className="cursor-pointer"
          onClick={nextAvatar}
        />

        {/* 🔘 Кнопка "Подробнее" */}
        <image
          href={buttonDetails}
          x="300"
          y="1260"
          width="480"
          height="100"
          className="cursor-pointer"
        />

        {/* 🟪 Кнопка "Выбрать" */}
        <image
          href={buttonSelect}
          x="300"
          y="1380"
          width="480"
          height="100"
          className="cursor-pointer"
          onClick={handleSelect}
        />
      </svg>
    </div>
  );
}
