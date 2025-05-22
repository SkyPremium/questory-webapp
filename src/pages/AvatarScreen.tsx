import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSound } from "../utils/useSound";
import clickSound from "@/assets/sounds/click_ui.mp3";

// 🖼️ Изображения
import background from "@/assets/images/avatar_selection_bg.jpg";
import logo from "@/assets/images/logo.png";
import avatarFrame from "@/assets/images/avatar_frame_ui_512_inside.png";
import arrowLeft from "@/assets/images/arrow_left_final.png";
import arrowRight from "@/assets/images/arrow_right_final.png";
import buttonSelect from "@/assets/images/button_select_final.png";
import buttonDetails from "@/assets/images/button_details_final.png";

// 🎴 Аватары
import avatar1 from "@/assets/avatars/avatar1.png";
import avatar2 from "@/assets/avatars/avatar2.png";
import avatar3 from "@/assets/avatars/avatar3.png";
import avatar4 from "@/assets/avatars/avatar4.png";
import avatar5 from "@/assets/avatars/avatar5.png";

const avatars = [
  { name: "Эрик, юный герой", image: avatar1 },
  { name: "Кай, странник", image: avatar2 },
  { name: "Тельма, травница", image: avatar3 },
  { name: "Авиэль, эльфийка", image: avatar4 },
  { name: "Лео, ученик мага", image: avatar5 },
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
      <svg viewBox="0 0 1080 1920" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <pattern id="bg" patternUnits="userSpaceOnUse" width="1080" height="1920">
            <image href={background} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="1080" height="1920" fill="url(#bg)" />
        <image href={logo} x="0" y="0" width="1080" height="300" />
        <image href={avatarFrame} x="280" y="500" width="520" height="520" />
        <image href={avatars[index].image} x="284" y="504" width="512" height="512" />
        <foreignObject x="280" y="1020" width="520" height="60">
          <div className="text-center text-white text-xl font-semibold">
            {avatars[index].name}
          </div>
        </foreignObject>
        <image
          href={arrowLeft}
          x="180"
          y="720"
          width="60"
          height="60"
          className="cursor-pointer"
          onClick={prevAvatar}
        />
        <image
          href={arrowRight}
          x="840"
          y="720"
          width="60"
          height="60"
          className="cursor-pointer"
          onClick={nextAvatar}
        />
        <image
          href={buttonDetails}
          x="300"
          y="1120"
          width="480"
          height="100"
          className="cursor-pointer"
        />
        <image
          href={buttonSelect}
          x="300"
          y="1250"
          width="480"
          height="100"
          className="cursor-pointer"
          onClick={handleSelect}
        />
      </svg>
    </div>
  );
}
