import React, { useState } from 'react';

export default function RulesScreen() {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/src/assets/images/rules.jpg)' }}
    >
      {/* Галочка */}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="absolute"
        style={{
          top: '86.2%',   // Процентные значения, подобранные под изображение
          left: '8.2%',
          width: '20px',
          height: '20px',
        }}
      />

      {/* Затемнение кнопки */}
      {!checked && (
        <div
          className="absolute bg-black opacity-50 rounded"
          style={{
            top: '90.6%',
            left: '25.4%',
            width: '49.2%',
            height: '5.6%',
          }}
        />
      )}

      {/* Прозрачная кнопка для обработки клика */}
      <button
        disabled={!checked}
        className="absolute w-[49.2%] h-[5.6%]"
        style={{
          top: '90.6%',
          left: '25.4%',
        }}
        onClick={() => console.log('Принял правила')}
      >
        {/* Невидимая, т.к. кнопка уже нарисована на фоне */}
        <span className="sr-only">СОГЛАСЕН</span>
      </button>
    </div>
  );
}
