import React from "react";
import bg from "../assets/images/rules_bg.jpg";
import logo from "../assets/images/logo.png";

export default function RulesScreen() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center font-serif"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full bg-black/40 flex justify-center items-center px-4 py-6">
        <div className="max-w-[360px] w-full text-[#FFD875] flex flex-col justify-between h-full tracking-wide">
          <div className="flex flex-col items-center mt-2">
            <img src={logo} alt="logo" className="w-12 mb-1 drop-shadow-md" />
            <h1 className="text-2xl font-bold text-[#FFD875] drop-shadow-md">QUESTORY</h1>
            <h2 className="text-sm mt-1 text-center font-semibold text-[#FFF0B3] leading-snug drop-shadow-sm">
              ПРАВИЛА ИСПОЛЬЗОВАНИЯ<br />ПРОЕКТА QUESTORY
            </h2>
          </div>

          <div className="text-xs text-left space-y-4 mt-4 leading-snug text-[#FFF7D1] drop-shadow-sm">
            <p><b>1. Добровольность участия</b><br />
            Вы участвуете в игровом процессе добровольно. Вся информация в игре носит исключительно развлекательный характер.</p>

            <p><b>2. Невозвратность пожертвований</b><br />
            Все денежные переводы в рамках проекта (подписка, покупки и т.п.) являются добровольными пожертвованиями и возврату не подлежат.</p>

            <p><b>3. Игровой прогресс и жизни</b><br />
            При потере жизни прохождение книги начинается заново. Восстановление прогресса и откат сцен не предусмотрены.</p>

            <p><b>4. Ответственность</b><br />
            Администрация не несёт ответственности за действия пользователя, совершённые в рамках или по мотивам игрового сюжета.</p>
          </div>

          <div className="flex items-center gap-2 mt-5 text-[#FFF7D1]">
            <input
              type="checkbox"
              className="w-5 h-5 accent-yellow-500 border-2 border-[#FFD875] rounded-sm shadow-sm"
              id="agree"
            />
            <label htmlFor="agree" className="text-sm">
              Я прочитал и принимаю правила
            </label>
          </div>

          <button
            className="mt-5 w-full py-3 bg-[#A87117] text-white text-sm font-bold rounded-md border border-yellow-300 shadow-md hover:bg-[#CF9C3C] transition"
          >
            СОГЛАСЕН
          </button>
        </div>
      </div>
    </div>
  );
}