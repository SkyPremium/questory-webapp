import React from "react";

export default function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white text-center px-4">
      <img
        src="https://questory-webapp-bot.vercel.app/logo.png"
        alt="Questory Logo"
        className="w-24 h-24 mb-6 drop-shadow-lg"
      />
      <h1 className="text-4xl font-extrabold mb-4">Добро пожаловать в Questory</h1>
      <p className="text-lg max-w-md opacity-80 mb-8">
        Погрузись в уникальные интерактивные истории, где каждое твоё решение имеет значение. 
        Играй, исследуй, открывай редкие находки и проходи испытания в мире, полном загадок!
      </p>
      <button
        onClick={onNext}
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-2xl text-lg shadow-lg transition-all"
      >
        Начать
      </button>
    </div>
  );
}