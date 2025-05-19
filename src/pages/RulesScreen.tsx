import React from "react";
import bg from "@/assets/images/rules_bg.jpg";
import logo from "@/assets/images/logo.png";

export default function RulesScreen() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center text-yellow-100"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full bg-black/40 flex flex-col justify-between items-center px-4 py-8">
        <div className="flex flex-col items-center mt-6">
          <img src={logo} alt="logo" className="w-16 mb-3" />
          <h1 className="text-3xl font-bold text-yellow-300">QUESTORY</h1>
          <h2 className="text-xl mt-2 text-center font-semibold text-yellow-200">
            ПРАВИЛА ИСПОЛЬЗОВАНИЯ ПРОЕКТА QUESTORY
          </h2>
        </div>

        <div className="max-w-xl text-left text-base text-yellow-100 space-y-4 leading-relaxed mt-6">
          <p><b>1. Добровольность участия</b><br />
          Вы участвуете в игровом процессе добровольно. Вся информация в игре носит исключительно развлекательный характер.</p>

          <p><b>2. Невозвратность пожертвований</b><br />
          Все денежные переводы в рамках проекта (подписка, покупки и т.п.) являются добровольными пожертвованиями и возврату не подлежат.</p>

          <p><b>3. Игровой прогресс и жизни</b><br />
          При потере жизни прохождение книги начинается заново. Восстановление прогресса и откат сцен не предусмотрены.</p>

          <p><b>4. Ответственность</b><br />
          Администрация не несёт ответственности за действия пользователя, совершённые в рамках или по мотивам игрового сюжета.</p>
        </div>

        <div className="flex items-center gap-2 mt-6">
          <input type="checkbox" className="w-5 h-5 accent-yellow-500" id="agree" />
          <label htmlFor="agree" className="text-yellow-100">Я прочитал и принимаю правила</label>
        </div>

        <button
          className="mt-6 px-8 py-3 bg-yellow-700 text-white font-bold rounded-md border border-yellow-300 hover:bg-yellow-800"
          // onClick={() => перейти к следующему этапу регистрации}
        >
          СОГЛАСЕН
        </button>
      </div>
    </div>
  );
}