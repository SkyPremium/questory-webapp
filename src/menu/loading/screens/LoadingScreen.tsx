import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 🖼️ Изображения
import loadingBg from "@/menu/loading/images/LoadingScreen/loading.jpg";

import welcome from "@/menu/registration/images/WelcomeScreen/welcome.jpg";
import rules from "@/menu/registration/images/RulesScreen/rules.jpg";
import name from "@/menu/registration/images/NameScreen/name.jpg";
import logo from "@/menu/registration/images/logo.png";

import buttonWelcome from "@/menu/registration/images/WelcomeScreen/button_welcome.png";
import buttonRules from "@/menu/registration/images/RulesScreen/button_rules.png";
import checkboxChecked from "@/menu/registration/images/RulesScreen/checkbox_checked.png";
import checkboxEmpty from "@/menu/registration/images/RulesScreen/checkbox_empty.png";

import buttonName from "@/menu/registration/images/NameScreen/button_name.png";
import nameSave from "@/menu/registration/images/NameScreen/name_save.png";
import nameSave1 from "@/menu/registration/images/NameScreen/button_name_save_1.png";
import nameSave2 from "@/menu/registration/images/NameScreen/button_name_save_2.png";

import avatar1 from "@/data/avatars/register_avatars/avatar1.png";
import avatar2 from "@/data/avatars/register_avatars/avatar2.png";
import avatar3 from "@/data/avatars/register_avatars/avatar3.png";
import avatar4 from "@/data/avatars/register_avatars/avatar4.png";
import avatar5 from "@/data/avatars/register_avatars/avatar5.png";

import avatarBg from "@/menu/registration/images/AvatarScreen/avatar.jpg";
import avatarFrame from "@/menu/registration/images/AvatarScreen/avatar_2.png";
import avatarPopup from "@/menu/registration/images/AvatarScreen/avatar_3.png";
import buttonDetails from "@/menu/registration/images/AvatarScreen/button_avatar_1.png";
import buttonSelect from "@/menu/registration/images/AvatarScreen/button_avatar_2.png";
import arrowLeft from "@/menu/registration/images/AvatarScreen/button_avatar_3.png";
import arrowRight from "@/menu/registration/images/AvatarScreen/button_avatar_4.png";
import buttonBack from "@/menu/registration/images/AvatarScreen/button_avatar_5.png";

import tutorialIntro from "@/menu/registration/images/TutorialScreen/tutorial_intro.jpg";
import buttonTutorialStart from "@/menu/registration/images/TutorialScreen/button_tutorial_start.png";

// 🔊 Звук
import clickSound from "@/menu/registration/sounds/click_ui.mp3";

export default function LoadingScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentTip, setCurrentTip] = useState("");

  const tips = [
    "Распаковываем манускрипты...",
    "Привязываем волшебную нить...",
    "Собираем перья сказочников...",
    "Проверяем чернильницы...",
    "Устанавливаем ловушки...",
    "Зажигаем фонари в подземельях...",
    "Печатаем древние карты...",
  ];

  const imageAssets = [
    welcome, rules, name, logo,
    buttonWelcome, buttonRules, checkboxChecked, checkboxEmpty,
    buttonName, nameSave, nameSave1, nameSave2,
    avatar1, avatar2, avatar3, avatar4, avatar5,
    avatarBg, avatarFrame, avatarPopup,
    buttonDetails, buttonSelect, arrowLeft, arrowRight, buttonBack,
    tutorialIntro, buttonTutorialStart,
    loadingBg,
  ];

  const soundAssets = [clickSound];

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }

    const totalAssets = imageAssets.length + soundAssets.length;
    let loadedCount = 0;

    const updateProgress = () => {
      loadedCount += 1;
      const percent = Math.floor((loadedCount / totalAssets) * 100);
      setProgress(percent);
      if (loadedCount === totalAssets) {
        setTimeout(() => navigate("/welcome"), 500);
      }
    };

    // 📦 Загрузка изображений
    imageAssets.forEach((src) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress;
      img.src = src;
    });

    // 🔉 Загрузка звуков
    soundAssets.forEach((src) => {
      const audio = new Audio();
      audio.oncanplaythrough = updateProgress;
      audio.onerror = updateProgress;
      audio.src = src;
    });

    // 🧠 Подсказки
    setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
    const tipTimer = setInterval(() => {
      setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
    }, 2000);

    return () => {
      clearInterval(tipTimer);
    };
  }, []);

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
            <image href={loadingBg} x="0" y="0" width="1080" height="1920" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="1080" height="1920" fill="url(#bg)" />

        {/* 🔁 Прогрессбар */}
        <foreignObject x="208" y="1085" width="664" height="65">
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              overflow: "hidden",
              position: "relative",
              borderRadius: "999px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #ffd66c, #ffeb99)",
                transition: "width 0.3s ease",
                borderRadius: "999px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "30px",
                color: "#ffffff",
                textShadow: "0 0 5px #000, 0 0 8px #000",
              }}
            >
              {progress}%
            </div>
          </div>
        </foreignObject>

        {/* 🧠 Советы */}
        <foreignObject x="140" y="1200" width="800" height="120">
          <div
            style={{
              fontSize: "40px",
              color: "#fff7d5",
              textAlign: "center",
              textShadow: "0 0 5px black",
              lineHeight: "1.2",
            }}
          >
            {currentTip}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
