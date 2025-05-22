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
  const [transition, setTransition] = useState(false);

  const nextAvatar = () => {
    playClick();
    setTransition(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % avatars.length);
      setTransition(false);
    }, 200);
  };

  const prevAvatar = () => {
    playClick();
    setTransition(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
      setTransition(false);
    }, 200);
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

        {/* 🎴 Центральный аватар */}
        <image href={avatarFrame} x="280" y="400" width="520" height="600" />
        <image
          href={avatars[index].image}
          x="284"
          y="404"
          width="512"
          height="512"
          style={{
            transition: "opacity 0.3s ease",
            opacity: transition ? 0 : 1,
          }}
        />

        {/* 🎴 Левый аватар */}
        <image
          href={avatars[(index - 1 + avatars.length) % avatars.length].image}
          x="80"
          y="460"
          width="200"
          height="200"
          clipPath="url(#rounded)"
        />

        {/* 🎴 Правый аватар */}
        <image
          href={avatars[(index + 1) % avatars.length].image}
          x="800"
          y="460"
          width="200"
          height="200"
          clipPath="url(#rounded)"
        />

        {/* 🏷️ Имя */}
        <foreignObject x="280" y="960" width="520" height="60">
          <div className="text-center text-white text-xl font-semibold">
            {avatars[index].name}
          </div>
        </foreignObject>

        {/* ⬅️ Стрелка влево */}
        <image
          href={arrowLeft}
          x="260"
          y="1080"
          width="80"
          height="80"
          className="cursor-pointer"
          onClick={prevAvatar}
        />

        {/* ➡️ Стрелка вправо */}
        <image
          href={arrowRight}
          x="740"
          y="1080"
          width="80"
          height="80"
          className="cursor-pointer"
          onClick={nextAvatar}
        />

        {/* 🔘 Кнопка "Подробнее" */}
        <image
          href={buttonDetails}
          x="300"
          y="1180"
          width="480"
          height="100"
          className="cursor-pointer"
        />

        {/* 🟪 Кнопка "Выбрать" */}
        <image
          href={buttonSelect}
          x="300"
          y="1300"
          width="480"
          height="100"
          className="cursor-pointer"
          onClick={handleSelect}
        />
      </svg>
    </div>
  );
}
