import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSound } from "@/utils/useSound";
import clickSound from "@/assets/sounds/click_ui.mp3";

import { allAvatars } from "@/data/avatars/avatars";

import background from "@/assets/images/avatar.jpg";
import avatarFrame from "@/assets/images/avatar_2.png";
import arrowLeft from "@/assets/images/button_avatar_3.png";
import arrowRight from "@/assets/images/button_avatar_4.png";
import buttonSelect from "@/assets/images/button_avatar_2.png";
import buttonDetails from "@/assets/images/button_avatar_1.png";
import detailsPopup from "@/assets/images/avatar_3.png";
import buttonBack from "@/assets/images/button_avatar_5.png";

const avatars = allAvatars.slice(0, 5);

export default function AvatarScreen() {
  const navigate = useNavigate();
  const playClick = useSound(clickSound, 0.8);
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

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

  const handleDetails = () => {
    playClick();
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    playClick();
    setShowDetails(false);
  };

  const currentAvatar = avatars[index];

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
              <image href={avatarFrame} width="280" height="330" />
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
          href={arrowLeft}
          x="30"
          y="1440"
          width="180"
          height="180"
          className="cursor-pointer"
          onClick={prevAvatar}
        />

        <image
          href={arrowRight}
          x="870"
          y="1440"
          width="180"
          height="180"
          className="cursor-pointer"
          onClick={nextAvatar}
        />

        <image
          href={buttonDetails}
          x="210"
          y="1270"
          width="660"
          height="260"
          className="cursor-pointer"
          onClick={handleDetails}
        />

        <image
          href={buttonSelect}
          x="210"
          y="1530"
          width="660"
          height="260"
          className="cursor-pointer"
          onClick={handleSelect}
        />

        {showDetails && (
          <>
            <image href={detailsPopup} x="0" y="530" width="1080" height="1400" />
            <image
              href={avatarFrame}
              x="220"
              y="540"
              width="640"
              height="740"
            />
            <image
              href={currentAvatar.image}
              x="268"
              y="585"
              width="520"
              height="520"
            />
            <foreignObject x="100" y="1180" width="880" height="120">
              <div
                className="text-center"
                style={{
                  fontSize: "56px",
                  color: "#FFD700",
                  fontWeight: 700,
                  fontFamily: "'Georgia', serif",
                }}
              >
                {currentAvatar.name}
              </div>
            </foreignObject>
            <foreignObject x="100" y="1260" width="880" height="260">
              <div className="text-white text-center text-2xl px-6 leading-snug">
                {currentAvatar.description}
              </div>
            </foreignObject>
            <image
              href={buttonBack}
              x="260"
              y="1635"
              width="560"
              height="250"
              className="cursor-pointer"
              onClick={handleCloseDetails}
            />
          </>
        )}
      </svg>
    </div>
  );
}
