import React from "react";
import bg from "../assets/images/rules_bg.jpg";
import logo from "../assets/images/logo.png";

export default function RulesScreen() {
  return (
    <div className="w-full min-h-screen bg-[#1a1a1a] flex justify-center items-center">
      <div
        className="relative w-full max-w-[420px] aspect-[9/16] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-between px-5 py-6 font-serif text-[#FFD875] tracking-wide">

          <div className="flex flex-col items-center">
            <img src={logo} alt="logo" className="w-12 mb-2 drop-shadow-md" />
            <h1 className="text-2xl font-bold drop-shadow">QUESTORY</h1>
            <h2 className="text-sm text-center font-semibold text-[#FFF0B3] drop-shadow-sm">
              ПРАВИЛА ИСПОЛЬЗОВАНИЯ<br />ПРОЕКТА QUESTORY
            </h2>
          </div>

          <div className="text-xs text-left space-y-3 leading-snug text-[#FFF7D1] drop-shadow-sm">
            <p><b>1. Добровольность участия</b><br />
            Вы участвуете в игровом процессе добровольно. Вся информация в игре носит исключительно развлекательный характер.</p>

            <p><b>2. Невозвратность пожертвований</b><br />
            Все денежные переводы в рамках проекта (подписка, покупки и т.п.) являются добровольными пожертвованиями и возврату не подлежат.</p>

            <p><b>3. Игровой прогресс и жизни</b><br />
            При потере жизни прохождение книги начинается заново. Восстановление прогресса и откат сцен не предусмотрены.</p>

            <p><b>4. Ответственность</b><br />
            Администрация не несёт ответственности за действия пользователя, совершённые в рамках или по мотивам игрового сюжета.</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-[#FFF7D1]">
              <input
                type="checkbox"
                className="w-5 h-5 accent-yellow-500 border-2 border-[#FFD875] rounded-sm shadow-sm"
              />
              Я прочитал и принимаю правила
            </label>

            <button
              className="w-full py-3 bg-[#A87117] text-white text-sm font-bold rounded-md border border-yellow-300 shadow-md hover:bg-[#CF9C3C] transition"
            >
              СОГЛАСЕН
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
