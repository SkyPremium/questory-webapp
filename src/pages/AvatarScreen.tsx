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
      <svg viewBox="0 0 1080 1920" className="w-full h-full" preserveAspectRatio="none">
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

        <foreignObject x="210" y="1320" width="660" height="200">
          <button
            onClick={handleDetails}
            style={{
              width: "100%", height: "100%",
              background: "none", border: "none", padding: 0,
              transition: "transform 0.15s ease"
            }}
            onPointerDown={e => (e.currentTarget.style.transform = "scale(0.95)")}
            onPointerUp={e => (e.currentTarget.style.transform = "scale(1)")}
            onPointerLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={buttonDetails} alt="Подробнее" style={{ width: "100%", height: "100%" }} />
          </button>
        </foreignObject>

        <foreignObject x="210" y="1560" width="660" height="200">
          <button
            onClick={handleSelect}
            style={{
              width: "100%", height: "100%",
              background: "none", border: "none", padding: 0,
              transition: "transform 0.15s ease"
            }}
            onPointerDown={e => (e.currentTarget.style.transform = "scale(0.95)")}
            onPointerUp={e => (e.currentTarget.style.transform = "scale(1)")}
            onPointerLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={buttonSelect} alt="Выбрать" style={{ width: "100%", height: "100%" }} />
          </button>
        </foreignObject>

        <foreignObject x="50" y="1440" width="120" height="180">
          <button
            onClick={prevAvatar}
            style={{
              width: "100%", height: "100%",
              background: "none", border: "none", padding: 0,
              transition: "transform 0.15s ease"
            }}
            onPointerDown={e => (e.currentTarget.style.transform = "scale(0.95)")}
            onPointerUp={e => (e.currentTarget.style.transform = "scale(1)")}
            onPointerLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={arrowLeft} alt="Prev" style={{ width: "100%", height: "100%" }} />
          </button>
        </foreignObject>

        <foreignObject x="910" y="1440" width="120" height="180">
          <button
            onClick={nextAvatar}
            style={{
              width: "100%", height: "100%",
              background: "none", border: "none", padding: 0,
              transition: "transform 0.15s ease"
            }}
            onPointerDown={e => (e.currentTarget.style.transform = "scale(0.95)")}
            onPointerUp={e => (e.currentTarget.style.transform = "scale(1)")}
            onPointerLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={arrowRight} alt="Next" style={{ width: "100%", height: "100%" }} />
          </button>
        </foreignObject>

        {showDetails && (
          <>
            <image href={detailsPopup} x="0" y="530" width="1080" height="1400" />
            <image href={avatarFrame} x="190" y="530" width="700" height="800" />
            <image href={currentAvatar.image} x="278" y="596" width="520" height="520" />

            <foreignObject x="100" y="1150" width="880" height="140">
              <div
                className="text-center"
                style={{
                  fontSize: "80px",
                  color: "#FFD700",
                  fontWeight: 700,
                  fontFamily: "'Georgia', serif",
                  textShadow: "0 0 6px #000, 0 0 8px #000",
                }}
              >
                {currentAvatar.name}
              </div>
            </foreignObject>

            <foreignObject x="100" y="1330" width="880" height="240">
              <div
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "38px",
                  color: "#f2d9b1",
                  lineHeight: "1.6",
                  textAlign: "center",
                  textShadow: "0 0 4px #000",
                }}
              >
                {currentAvatar.description}
              </div>
            </foreignObject>

            <foreignObject x="100" y="1530" width="880" height="100">
              <div
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "30px",
                  color: "#ff4747",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  textAlign: "center",
                  textShadow: "0 0 5px #000, 0 0 8px #000",
                }}
              >
                {currentAvatar.source}
              </div>
            </foreignObject>

            <foreignObject x="250" y="1640" width="580" height="200">
              <button
                onClick={handleCloseDetails}
                style={{
                  width: "100%", height: "100%",
                  background: "none", border: "none", padding: 0,
                  transition: "transform 0.15s ease"
                }}
                onPointerDown={e => (e.currentTarget.style.transform = "scale(0.95)")}
                onPointerUp={e => (e.currentTarget.style.transform = "scale(1)")}
                onPointerLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img src={buttonBack} alt="Назад" style={{ width: "100%", height: "100%" }} />
              </button>
            </foreignObject>
          </>
        )}
      </svg>
    </div>
  );
}
