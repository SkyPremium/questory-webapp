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

        {/* ...карусель и кнопки... */}

        {showDetails && (
          <>
            <image href={detailsPopup} x="0" y="530" width="1080" height="1400" />
            <image href={avatarFrame} x="190" y="530" width="700" height="800" />
            <image href={currentAvatar.image} x="278" y="596" width="520" height="520" />

            {/* Имя */}
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

            {/* Описание */}
            <foreignObject x="100" y="1300" width="880" height="240">
              <div
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "32px",
                  color: "#ffffff",
                  lineHeight: "1.5",
                  textAlign: "center",
                  textShadow: "0 0 4px #000",
                }}
              >
                {currentAvatar.description}
              </div>
            </foreignObject>

            {/* Способ получения */}
            <foreignObject x="100" y="1560" width="880" height="80">
              <div
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "30px",
                  color: "#FFDC87",
                  fontWeight: 700,
                  fontStyle: "italic",
                  textAlign: "center",
                  textShadow: "0 0 5px #000, 0 0 8px #000",
                }}
              >
                {currentAvatar.source}
              </div>
            </foreignObject>

            {/* Кнопка назад */}
            <foreignObject x="250" y="1640" width="580" height="200">
              <button
                onClick={() => { playClick(); handleCloseDetails(); }}
                style={{
                  width: "100%",
                  height: "100%",
                  background: "none",
                  border: "none",
                  padding: 0,
                  transition: "transform 0.15s ease",
                }}
                onPointerDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
                onPointerUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                onPointerLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
