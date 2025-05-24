import { useEffect } from "react";
import loadingBg from "@/assets/images/loading.jpg";

import avatar1 from "@/assets/avatars/avatar1.png";
import avatar2 from "@/assets/avatars/avatar2.png";
import avatar3 from "@/assets/avatars/avatar3.png";
import avatar4 from "@/assets/avatars/avatar4.png";
import avatar5 from "@/assets/avatars/avatar5.png";

import avatarFrame from "@/assets/images/avatar_2.png";
import avatarPopup from "@/assets/images/avatar_3.png";
import buttonDetails from "@/assets/images/button_avatar_1.png";
import buttonSelect from "@/assets/images/button_avatar_2.png";
import arrowLeft from "@/assets/images/button_avatar_3.png";
import arrowRight from "@/assets/images/button_avatar_4.png";
import buttonBack from "@/assets/images/button_avatar_5.png";

import buttonName from "@/assets/images/button_name.png";
import buttonNameSave1 from "@/assets/images/button_name_save_1.png";
import buttonNameSave2 from "@/assets/images/button_name_save_2.png";
import buttonRules from "@/assets/images/button_rules.png";
import buttonWelcome from "@/assets/images/button_welcome.png";

import checkboxChecked from "@/assets/images/checkbox_checked.png";
import checkboxEmpty from "@/assets/images/checkbox_empty.png";

import logo from "@/assets/images/logo.png";
import rulesBg from "@/assets/images/rules.jpg";
import welcomeBg from "@/assets/images/welcome.jpg";
import nameBg from "@/assets/images/name.jpg";
import nameSaveBg from "@/assets/images/name_save.png";

const preloadImages = (sources: string[]) => {
  sources.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

export default function LoadingScreen() {
  useEffect(() => {
    preloadImages([
      loadingBg,
      avatar1,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatarFrame,
      avatarPopup,
      buttonDetails,
      buttonSelect,
      arrowLeft,
      arrowRight,
      buttonBack,
      buttonName,
      buttonNameSave1,
      buttonNameSave2,
      buttonRules,
      buttonWelcome,
      checkboxChecked,
      checkboxEmpty,
      logo,
      rulesBg,
      welcomeBg,
      nameBg,
      nameSaveBg,
    ]);
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
      <img
        src={loadingBg}
        alt="Loading..."
        className="absolute w-full h-full object-fill"
      />
    </div>
  );
}
