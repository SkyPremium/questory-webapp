import React, { useState } from 'react';
import rulesImage from '../assets/images/rules.jpg';

const RulesScreen: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Фоновая картинка */}
      <img
        src={rulesImage}
        alt="rules"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Галочка */}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        style={{
          position: 'absolute',
          bottom: '100px',
          left: '60px',
          width: '24px',
          height: '24px',
          zIndex: 2,
        }}
      />

      {/* Клик по всей надписи — тоже переключает чекбокс */}
      <label
        onClick={() => setChecked(!checked)}
        style={{
          position: 'absolute',
          bottom: '100px',
          left: '95px',
          color: 'yellow',
          fontWeight: 'bold',
          fontSize: '16px',
          zIndex: 2,
          cursor: 'pointer',
        }}
      >
        Я прочитал и принимаю правила
      </label>

      {/* Кнопка "СОГЛАСЕН" */}
      <button
        disabled={!checked}
        style={{
          position: 'absolute',
          bottom: '35px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 30px',
          fontSize: '20px',
          fontWeight: 'bold',
          borderRadius: '8px',
          border: '2px solid #d89f3c',
          backgroundColor: checked ? '#d89f3c' : '#444',
          color: checked ? '#3b230d' : '#aaa',
          cursor: checked ? 'pointer' : 'not-allowed',
          zIndex: 2,
        }}
        onClick={() => {
          alert('Правила приняты!');
        }}
      >
        СОГЛАСЕН
      </button>
    </div>
  );
};

export default RulesScreen;
