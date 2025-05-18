import React from "react";

export default function Welcome() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url("/assets/images/welcome.jpg")` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center p-6">
        <img src="/assets/logo-white.svg" alt="Questory Logo" className="w-24 mb-4" />
        <h1 className="text-4xl font-extrabold drop-shadow-md">Добро пожаловать в Questory</h1>
        <p className="mt-4 text-lg max-w-md font-medium drop-shadow">
          Открой для себя интерактивные истории, где каждый твой выбор влияет на сюжет.<br />
          Головоломки, ловушки, испытания, неожиданные повороты и тайны.
        </p>
        <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
          Начать
        </button>
      </div>
    </div>
  );
}
