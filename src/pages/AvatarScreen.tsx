import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSound } from "../utils/useSound";
import clickSound from "../assets/sounds/click_ui.mp3";

// Фон и UI
import background from "../assets/images/avatar.jpg";
import frame from "../assets/images/avatar_2.png";
import buttonDetails from "../assets/images/button_avatar_1.png";
import buttonSelect from "../assets/images/button_avatar_2.png";
import arrowLeft from "../assets/images/button_avatar_3.png";
import arrowRight from "../assets/images/button_avatar_4.png";

// Аватары
import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import avatar4 from "../assets/avatars/avatar4.png";
import avatar5 from "../assets/avatars/avatar5.png";

const avatars = [
  { name: "Эрик, юный герой", image: avatar1 },
  { name: "Кай, странник", image: avatar2 },
  { name: "Тельма, травница", image: avatar3 },
  { name: "Авиэль, эльфийка", image: avatar4 },
  { name: "Лео, ученик мага", image: avatar5 }
];

export default function AvatarScreen() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const playClick = useSound(clickSound, 0.8);

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

        {/* Соседние аватары */}
        <image href={frame} x="100" y="580" width="300" height="300" />
        <image href={avatars[(index - 1 + avatars.length) % avatars.length].image} x="118" y="598" width="260" height="260" />

        <image href={frame} x="680" y="580" width="300" height="300" />
        <image href={avatars[(index + 1) % avatars.length].image} x="698" y="598" width="260" height="260" />

        {/* Центральный аватар */}
        <image href={frame} x="390" y="500" width="300" height="300" />
        <image href={avatars[index].image} x="408" y="518" width="264" height="264" />

        {/* Имя */}
        <foreignObject x="390" y="810" width="300" height="50">
          <div className="text-center text-white text-lg font-semibold">
            {avatars[index].name}
          </div>
        </foreignObject>

        {/* Стрелки */}
        <image
          href={arrowLeft}
          x="280"
          y="960"
          width="60"
          height="60"
          className="cursor-pointer"
          onClick={prevAvatar}
        />

        <image
          href={arrowRight}
          x="740"
          y="960"
          width="60"
          height="60"
          className="cursor-pointer"
          onClick={nextAvatar}
        />

        {/* Кнопка "Подробнее" */}
        <image
          href={buttonDetails}
          x="300"
          y="1080"
          width="480"
          height="100"
          className="cursor-pointer"
          onClick={playClick}
        />

        {/* Кнопка "Выбрать" */}
        <image
          href={buttonSelect}
          x="300"
          y="1200"
          width="480"
          height="100"
          className="cursor-pointer"
          onClick={handleSelect}
        />
      </svg>
    </div>
  );
}