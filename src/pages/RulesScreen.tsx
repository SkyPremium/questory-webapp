import React from "react";
import bg from "../assets/images/rules_bg.jpg";
import logo from "../assets/images/logo.png";

export default function RulesScreen() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full bg-black/40 flex justify-center items-center px-4 py-6">
        <div className="max-w-xs w-full text-yellow-100 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center mt-2">
            <img src={logo} alt="logo" className="w-12 mb-2" />
            <h1 className="text-2xl font-bold text-yellow-300 leading-tight drop-shadow">QUESTORY</h1>
            <h2 className="text-sm mt-1 text-center font-semibold text-yellow-200 leading-snug">
              ПРАВИЛА ИСПОЛЬЗОВАНИЯ<br />ПРОЕКТА QUESTORY
            </h2>
          </div>

          <div className="text-xs text-left space-y-3 mt-4 leading-tight">
            <p><b>1. Добровольность участия</b><br />
            Участие добровольное. Информация носит развлекательный характер.</p>

            <p><b>2. Невозвратность пожертвований</b><br />
            Все переводы считаются добровольными и не подлежат возврату.</p>

            <p><b>3. Игровой прогресс и жизни</b><br />
            Потеря жизни = начало книги заново. Восстановление не предусмотрено.</p>

            <p><b>4. Ответственность</b><br />
            Администрация не несёт ответственности за действия игроков.</p>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <input
              type="checkbox"
              className="w-5 h-5 accent-yellow-500 border-2 border-yellow-300 rounded-sm"
              id="agree"
            />
            <label htmlFor="agree" className="text-sm leading-tight">
              Я прочитал и принимаю правила
            </label>
          </div>

          <button
            className="mt-5 w-full py-3 bg-yellow-700 text-white text-sm font-bold rounded-lg border border-yellow-300 shadow-md hover:bg-yellow-800 transition"
          >
            СОГЛАСЕН
          </button>
        </div>
      </div>
    </div>
  );
}