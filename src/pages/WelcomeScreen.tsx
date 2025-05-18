import React from "react";
import welcomeBg from "../assets/images/welcome.jpg";

const WelcomeScreen = () => {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center text-white text-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${welcomeBg})` }}
    >
      <img
        src="/logo.png"
        alt="Questory Logo"
        className="w-24 h-24 mb-6 drop-shadow-lg"
      />
      <h1 className="text-4xl font-extrabold mb-4">Добро пожаловать в Questory</h1>
      <p className="text-lg max-w-md opacity-90 mb-8">
        Открой для себя интерактивные истории, где каждый твой выбор влияет на сюжет.
        Сражения, головоломки, ловушки и испытания ждут тебя в каждой книге.
      </p>
      <button
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-2xl text-lg shadow-lg transition-all"
      >
        Начать
      </button>
    </div>
  );
};

export default WelcomeScreen;
