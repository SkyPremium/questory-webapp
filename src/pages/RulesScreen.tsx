import { useState } from "react";
import Image from "next/image";

// 🖼 Импорт картинок через относительные пути
import buttonAgree from "../../assets/images/button_agree.png";
import checkboxChecked from "../../assets/images/checkbox_checked.png";
import checkboxEmpty from "../../assets/images/checkbox_empty.png";
import logo from "../../assets/images/logo.png";
import rulesBackground from "../../assets/images/rules.jpg";

export default function RulesScreen({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative w-full h-full flex justify-center items-center bg-black">
      {/* 📜 Фон */}
      <Image
        src={rulesBackground}
        alt="Правила"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      {/* 🔥 Логотип */}
      <div className="absolute top-4 left-4 z-10">
        <Image src={logo} alt="Questory Logo" width={180} height={80} />
      </div>

      {/* ✅ Чекбокс */}
      <div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={() => setChecked(!checked)}
      >
        <Image
          src={checked ? checkboxChecked : checkboxEmpty}
          alt="Чекбокс"
          width={80}
          height={80}
        />
      </div>

      {/* 🟫 Кнопка "Согласен" */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={onAgree}
          disabled={!checked}
          className={`transition-all duration-200 ${
            checked ? "opacity-100" : "opacity-40 pointer-events-none"
          }`}
        >
          <Image src={buttonAgree} alt="Согласен" width={250} height={80} />
        </button>
      </div>
    </div>
  );
}
