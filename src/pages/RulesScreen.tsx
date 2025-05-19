import React from "react";
import rules from "../assets/images/rules.jpg";

export default function RulesScreen() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-end relative overflow-hidden">
      {/* Фоновая картинка */}
      <img
        src={rules}
        alt="Правила Questory"
        className="absolute inset-0 w-full h-full object-contain z-0"
      />

      {/* UI поверх картинки */}
      <div className="relative z-10 mb-6 px-4 w-full max-w-[420px] flex flex-col items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-white bg-black/40 px-3 py-2 rounded">
          <input
            type="checkbox"
            className="w-5 h-5 accent-yellow-500 border-2 border-yellow-400 rounded-sm"
          />
          Я прочитал и принимаю правила
        </label>

        <button
          className="w-full py-3 bg-yellow-700 text-white text-sm font-bold rounded-md border border-yellow-300 shadow-md hover:bg-yellow-800 transition"
        >
          СОГЛАСЕН
        </button>
      </div>
    </div>
  );
}
