import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSound } from "../utils/useSound";
import clickSound from "../assets/sounds/click_ui.mp3";

// 🗾️ Изображения
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
  { name: "Эрик", image: avatar1 },
  { name: "Кай", image: avatar2 },
  { name: "Тельма", image: avatar3 },
  { name: "Авиэль", image: avatar4 },
  { name: "Лео", image: avatar5 },
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
          <pattern id="bg" patternUnits="userSpaceOnUse" width="1080" height="1920">
            <image href={background} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="1080" height="1920" fill="url(#bg)" />

        {/* 🎴 Карусель из 3 аватаров */}
        {[-1, 0, 1].map((offset) => {
          const avatarIndex = (index + offset + avatars.length) % avatars.length;
          const spacing = 520;
          const baseX = 540;
          const frameWidth = 280 * 1.65;
          const frameHeight = 330 * 1.65;
          const imageSize = 512 * 1.03;
          const scale = 1;
          const xOffset = baseX - (frameWidth / 2) + offset * spacing;
          const opacity = offset === 0 ? 1 : 0.6;

          return (
            <g
              key={avatarIndex}
              transform={`translate(${xOffset}, 560) scale(${scale})`}
              style={{ transition: "all 0.5s ease" }}
            >
              <image href={avatarFrame} width={frameWidth} height={frameHeight} />
              <image
                href={avatars[avatarIndex].image}
                x={(frameWidth - imageSize) / 2}
                y={25}
                width={imageSize}
                height={imageSize}
                opacity={opacity}
              />
              <foreignObject x="0" y={frameHeight - 60} width={frameWidth} height="60">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white text-[32px] font-bold drop-shadow-md">
                    {avatars[avatarIndex].name}
                  </span>
                </div>
              </foreignObject>
            </g>
          );
        })}

        {/* 🔘 Кнопка "Подробнее" */}
        <image
          href={buttonDetails}
          x="300"
          y="1150"
          width="600"
          height="250"
          className="cursor-pointer"
        />

        {/* 🟪 Кнопка "Выбрать" */}
        <image
          href={buttonSelect}
          x="300"
          y="1420"
          width="600"
          height="250"
          className="cursor-pointer"
          onClick={handleSelect}
        />

        {/* ⬅️ Стрелка влево */}
        <image
          href={arrowLeft}
          x="80"
          y="1330"
          width="200"
          height="200"
          className="cursor-pointer"
          onClick={prevAvatar}
        />

        {/* ➡️ Стрелка вправо */}
        <image
          href={arrowRight}
          x="800"
          y="1330"
          width="200"
          height="200"
          className="cursor-pointer"
          onClick={nextAvatar}
        />
      </svg>
    </div>
  );
}
