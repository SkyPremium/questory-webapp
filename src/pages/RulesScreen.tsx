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
    <div className="relative w-full h-screen">
      <img src={rulesBg} alt="rules" className="w-full h-full object-cover" />

      {/* Галочка — теперь точно на месте */}
      <div
        onClick={() => setAgreed(!agreed)}
        className="absolute"
        style={{
          top: '87.7%',
          left: '11.7%',
          width: '24px',
          height: '24px',
          border: '2px solid #FFD700',
          backgroundColor: agreed ? '#FFD700' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
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
        className="absolute text-lg font-bold rounded transition-all px-8 py-2"
        style={{
          top: '93.2%',
          left: '11%',
          backgroundColor: agreed ? '#FFCC33' : '#3c2c13',
          color: agreed ? '#000' : '#888',
          opacity: agreed ? 1 : 0.5,
          cursor: agreed ? 'pointer' : 'not-allowed',
        }}
      >
        СОГЛАСЕН
      </button>
    </div>
  );
}
