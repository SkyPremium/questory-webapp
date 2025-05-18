import React, { useState } from 'react';
import rulesImage from '../assets/images/rules.jpg';

const RulesScreen: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '768px',
          aspectRatio: '9 / 16',
          backgroundImage: `url(${rulesImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Галочка */}
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          style={{
            position: 'absolute',
            left: '9.5%',
            bottom: '12%',
            width: '24px',
            height: '24px',
            zIndex: 2,
          }}
        />

        {/* Клик по надписи */}
        <label
          onClick={() => setChecked(!checked)}
          style={{
            position: 'absolute',
            left: '15%',
            bottom: '12%',
            fontSize: '1.1rem',
            color: 'yellow',
            fontWeight: 'bold',
            zIndex: 2,
            cursor: 'pointer',
          }}
        >
          Я прочитал и принимаю правила
        </label>

        {/* Кнопка */}
        <button
          disabled={!checked}
          style={{
            position: 'absolute',
            bottom: '5.5%',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px 25px',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            backgroundColor: checked ? '#d89f3c' : '#444',
            border: '2px solid #d89f3c',
            color: checked ? '#3b230d' : '#aaa',
            borderRadius: '8px',
            cursor: checked ? 'pointer' : 'not-allowed',
            zIndex: 2,
          }}
          onClick={() => {
            alert('Правила приняты');
          }}
        >
          СОГЛАСЕН
        </button>
      </div>
    </div>
  );
};

export default RulesScreen;
