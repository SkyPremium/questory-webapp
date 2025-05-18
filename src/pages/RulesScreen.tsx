import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rulesBg from '../assets/images/rules.jpg';

export default function RulesScreen() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (agreed) navigate('/start');
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${rulesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Галочка — абсолютно позиционирована */}
      <div
        onClick={() => setAgreed(!agreed)}
        className="absolute cursor-pointer"
        style={{
          top: '780px',
          left: '72px',
          width: '20px',
          height: '20px',
          backgroundColor: agreed ? '#FFD700' : 'transparent',
          border: '2px solid #FFD700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease-in-out',
        }}
      >
        {agreed && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '16px', height: '16px' }}
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>

      {/* Кнопка */}
      <button
        onClick={handleContinue}
        disabled={!agreed}
        className="absolute text-lg font-bold px-10 py-2 rounded transition-all"
        style={{
          top: '835px',
          left: '66px',
          backgroundColor: agreed ? '#FFCC33' : '#3c2c13',
          color: agreed ? '#000' : '#888',
          opacity: agreed ? 1 : 0.6,
          cursor: agreed ? 'pointer' : 'not-allowed',
        }}
      >
        СОГЛАСЕН
      </button>
    </div>
  );
}
