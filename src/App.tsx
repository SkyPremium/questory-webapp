import React, { useEffect } from "react";

declare global {
  interface Window {
    Telegram: any;
  }
}

export default function App() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
      console.log("✅ Telegram WebApp инициализирован.");
    }
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Добро пожаловать в Questory</h1>
        <p className="text-lg opacity-70">Web App успешно подключён.</p>
      </div>
    </div>
  );
}