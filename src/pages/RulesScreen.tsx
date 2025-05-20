import React from "react";

export default function RulesScreen() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <div
        className="relative"
        style={{ width: "100%", maxWidth: 540, aspectRatio: "9 / 16" }}
      >
        {/* Фон */}
        <img
          src="/src/assets/images/rules.jpg"
          alt="Правила"
          className="w-full h-full object-contain"
        />

        {/* Логотип */}
        <img
          src="/src/assets/images/logo.png"
          alt="Логотип"
          className="absolute"
          style={{ top: 60, left: "50%", transform: "translateX(-50%)", width: 220 }}
        />

        {/* Галочка (или пустой чекбокс) */}
        <img
          src="/src/assets/images/checkbox_empty.png"
          alt="Чекбокс"
          className="absolute"
          style={{ left: 80, bottom: 240, width: 100 }}
        />

        {/* Кнопка СОГЛАСЕН */}
        <img
          src="/src/assets/images/button_agree.png"
          alt="Согласен"
          className="absolute cursor-pointer"
          style={{ left: "50%", transform: "translateX(-50%)", bottom: 120, width: 260 }}
        />
      </div>
    </div>
  );
}