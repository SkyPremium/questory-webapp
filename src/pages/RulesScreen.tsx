import React from "react";
import bg from "../assets/images/rules_bg.jpg";
import logo from "../assets/images/logo.png";

export default function RulesScreen() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center text-yellow-100"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full bg-black/40 flex flex-col justify-between items-center px-4 py-2">
        <div className="flex flex-col items-center mt-4">
          <img src={logo} alt="logo" className="w-12 mb-2" />
          <h1 className="text-2xl font-bold text-yellow-300 leading-tight">QUESTORY</h1>
          <h2 className="text-md mt-1 text-center font-semibold text-yellow-200">
            ПРАВИЛА ИСПОЛЬЗОВАНИЯ<br />ПРОЕКТА QUESTORY
          </h2>
        </div>

        <div className="max-w-sm text-xs text-yellow-100 text-left space-y-2 mt-2 leading-snug">
          <p><b>1. Добровольность участия</b><br />
          Участие добровольное. Информация носит развлекательный характер.</p>

          <p><b>2. Невозвратность пожертвований</b><br />
          Все переводы считаются добровольными и не подлежат возврату.</p>

          <p><b>3. Игровой прогресс и жизни</b><br />
          Потеря жизни = начало книги заново. Восстановление не предусмотрено.</p>

          <p><b>4. Ответственность</b><br />
          Администрация не несёт ответственности за действия игроков.</p>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" className="w-4 h-4 accent-yellow-500" id="agree" />
          <label htmlFor="agree" className="text-sm text-yellow-100">Я прочитал и принимаю правила</label>
        </div>

        <button
          className="mt-4 px-6 py-2 bg-yellow-700 text-white text-sm font-semibold rounded-md border border-yellow-300 hover:bg-yellow-800"
        >
          СОГЛАСЕН
        </button>
      </div>
    </div>
  );
}