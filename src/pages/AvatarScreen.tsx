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
          const spacing = 470;
          const baseX = 540;
          const frameWidth = 280;
          const scale = 1.65;
          const avatarScale = 0.7;
          const avatarYOffset = 35;
          const opacity = offset === 0 ? 1 : 0.6;
          const xOffset = baseX - (frameWidth * scale) / 2 + offset * spacing;

          return (
            <g
              key={avatarIndex}
              transform={`translate(${xOffset}, 600) scale(${scale})`}
              style={{ transition: "all 0.5s ease" }}
            >
              <image href={avatarFrame} width="280" height="330" />
              <image
                href={avatars[avatarIndex].image}
                x={(280 - 512 * avatarScale) / 2}
                y={avatarYOffset}
                width={512 * avatarScale}
                height={512 * avatarScale}
                opacity={opacity}
              />
              <foreignObject x="0" y="285" width="280" height="45">
                <div className="text-center text-yellow-300 text-lg font-bold" style={{ lineHeight: "1.2em" }}>
                  {avatars[avatarIndex].name}
                </div>
              </foreignObject>
            </g>
          );
        })}

        {/* ⬅️ Стрелка влево */}
        <image
          href={arrowLeft}
          x="100"
          y="1380"
          width="150"
          height="150"
          className="cursor-pointer"
          onClick={prevAvatar}
        />

        {/* ➡️ Стрелка вправо */}
        <image
          href={arrowRight}
          x="830"
          y="1380"
          width="150"
          height="150"
          className="cursor-pointer"
          onClick={nextAvatar}
        />

        {/* 🔘 Кнопка "Подробнее" */}
        <image
          href={buttonDetails}
          x="290"
          y="1200"
          width="500"
          height="200"
          className="cursor-pointer"
        />

        {/* 🟪 Кнопка "Выбрать" */}
        <image
          href={buttonSelect}
          x="290"
          y="1450"
          width="500"
          height="200"
          className="cursor-pointer"
          onClick={handleSelect}
        />
      </svg>
    </div>
  );
}
