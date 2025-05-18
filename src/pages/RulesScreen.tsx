import React, { useState } from 'react';

export default function RulesScreen() {
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    if (agreed) {
      console.log('Пользователь принял правила');
      // Здесь навигация к следующему экрану (например, обучение)
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Фоновое изображение */}
      <img
        src="/rules.jpg"
        alt="rules"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Галочка */}
      <input
        type="checkbox"
        checked={agreed}
        onChange={() => setAgreed(!agreed)}
        style={{
          position: 'absolute',
          left: '9%',
          bottom: '17%',
          width: '5%',
          height: '3%',
          accentColor: '#fcd34d',
          cursor: 'pointer',
        }}
      />

      {/* Клик по картинке кнопки "СОГЛАСЕН" */}
      <button
        onClick={handleAgree}
        disabled={!agreed}
        style={{
          position: 'absolute',
          bottom: '7%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '45%',
          height: '6%',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: agreed ? 'pointer' : 'default',
          opacity: agreed ? 1 : 0.4,
        }}
      >
        {/* Текст скрыт — кнопка кликабельна по изображению */}
        <span style={{ visibility: 'hidden' }}>СОГЛАСЕН</span>
      </button>
    </div>
  );
}
