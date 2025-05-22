import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSound } from "../utils/useSound";
import clickSound from "../assets/sounds/click_ui.mp3";

import background from "../assets/images/avatar.jpg";
import avatarFrame from "../assets/images/avatar_2.png";
import arrowLeft from "../assets/images/button_avatar_3.png";
import arrowRight from "../assets/images/button_avatar_4.png";
import buttonSelect from "../assets/images/button_avatar_2.png";
import buttonDetails from "../assets/images/button_avatar_1.png";

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
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const navigate = useNavigate();
  const playClick = useSound(clickSound, 0.8);

  const nextAvatar = () => {
    if (animating) return;
    playClick();
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % avatars.length);
      setAnimating(false);
    }, 300);
  };

  const prevAvatar = () => {
    if (animating) return;
    playClick();
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
      setAnimating(false);
    }, 300);
  };

  const handleSelect = () => {
    playClick();
    navigate("/training");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden relative">
      <img
        src={background}
        alt="bg"
        className="absolute w-full h-full object-fill"
      />

      <div className="absolute top-[300px] w-full flex items-center justify-center gap-8 transition-all duration-300 ease-in-out">
        {avatars.map((avatar, i) => {
          const offset = i - index;
          let scale = 1;
          let opacity = 1;
          if (offset === 0) scale = 1;
          else scale = 0.7;
          opacity = offset === 0 ? 1 : 0.6;

          return (
            <div
              key={i}
              className="transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(${offset * 260}px) scale(${scale})`,
                opacity,
                zIndex: offset === 0 ? 2 : 1,
                position: "absolute",
              }}
            >
              <div className="relative w-[220px] h-[270px]">
                <img
                  src={avatar.image}
                  alt="avatar"
                  className="absolute w-[220px] h-[220px] object-cover top-0 left-0 rounded-md"
                />
                <img
                  src={avatarFrame}
                  alt="frame"
                  className="absolute w-[220px] h-[270px] top-0 left-0"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-[620px] w-full text-center text-white text-xl font-semibold">
        {avatars[index].name}
      </div>

      <div className="absolute top-[700px] flex justify-center w-full gap-4">
        <img
          src={arrowLeft}
          className="cursor-pointer w-[60px] h-[60px]"
          onClick={prevAvatar}
        />
        <img
          src={arrowRight}
          className="cursor-pointer w-[60px] h-[60px]"
          onClick={nextAvatar}
        />
      </div>

      <div className="absolute top-[800px] w-full flex flex-col items-center gap-4">
        <img
          src={buttonDetails}
          className="cursor-pointer w-[320px]"
          alt="Подробнее"
        />
        <img
          src={buttonSelect}
          className="cursor-pointer w-[320px]"
          onClick={handleSelect}
          alt="Выбрать"
        />
      </div>
    </div>
  );
}