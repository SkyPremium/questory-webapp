import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSound } from "../utils/useSound";
import clickSound from "../assets/sounds/click_ui.mp3";

import { allAvatars } from "../data/avatars";

const avatars = allAvatars.slice(0, 5); // Используем первые 5 стартовых аватаров

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
            <image href={require("../assets/images/avatar.jpg")} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="1080" height="1920" fill="url(#bg)" />

        {[-1, 0, 1].map((offset) => {
          const avatarIndex = (index + offset + avatars.length) % avatars.length;
          const spacing = 550;
          const baseX = 540;
          const frameWidth = 280;

          const isCenter = offset === 0;

          const frameScale = isCenter ? 1.98576 : 1.68;
          const avatarScale = isCenter
            ? 0.41043
            : 0.41043 * (1.68 / 1.98576) * 1.1 * 1.03 * 1.02;

          const yOffset = isCenter ? 32 : 34;

          const opacity = isCenter ? 1 : 0.6;
          const xOffset = baseX - (frameWidth * frameScale) / 2 + offset * spacing;

          return (
            <g
              key={avatarIndex}
              transform={`translate(${xOffset}, 600) scale(${frameScale})`}
              style={{ transition: "all 0.5s ease" }}
            >
              <image href={require("../assets/images/avatar_2.png")} width="280" height="330" />
              <image
                href={avatars[avatarIndex].image}
                x={(280 - 512 * avatarScale) / 2}
                y={yOffset}
                width={512 * avatarScale}
                height={512 * avatarScale}
                opacity={opacity}
              />
              <foreignObject x="0" y="256" width="280" height="60">
                <div
                  className="text-center"
                  style={{
                    fontSize: "36px",
                    fontWeight: "700",
                    color: "#FFD700",
                    fontFamily: "'Georgia', serif",
                    lineHeight: "1.2em",
                  }}
                >
                  {avatars[avatarIndex].name}
                </div>
              </foreignObject>
            </g>
          );
        })}

        <image
          href={require("../assets/images/button_avatar_3.png")}
          x="30"
          y="1440"
          width="180"
          height="180"
          className="cursor-pointer"
          onClick={prevAvatar}
        />

        <image
          href={require("../assets/images/button_avatar_4.png")}
          x="870"
          y="1440"
          width="180"
          height="180"
          className="cursor-pointer"
          onClick={nextAvatar}
        />

        <image
          href={require("../assets/images/button_avatar_1.png")}
          x="210"
          y="1270"
          width="660"
          height="260"
          className="cursor-pointer"
        />

        <image
          href={require("../assets/images/button_avatar_2.png")}
          x="210"
          y="1530"
          width="660"
          height="260"
          className="cursor-pointer"
          onClick={handleSelect}
        />
      </svg>
    </div>
  );
}