import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rulesBg from '../assets/images/rules.jpg';

export default function RulesScreen() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen">
      <img src={rulesBg} alt="rules" className="w-full h-full object-cover" />

      {/* Галочка — пиксель-в-пиксель (17×17) */}
      <div
        onClick={() => setAgreed(!agreed)}
        className="absolute cursor-pointer"
        style={{
          top: '88.1%',
          left: '11.6%',
          width: '17px',
          height: '17px',
          border: '2px solid #FFD700',
          backgroundColor: agreed ? '#FFD700' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
            style={{ width: '14px', height: '14px' }}
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>

      {/* Затемняющий слой над нарисованной кнопкой */}
      {!agreed && (
        <div
          className="absolute"
          style={{
            top: '92.9%',
            left: '11%',
            width: '320px',
            height: '55px',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '8px',
          }}
        />
      )}

      {/* Невидимая кликабельная зона */}
      {agreed && (
        <div
          onClick={() => navigate('/start')}
          className="absolute cursor-pointer"
          style={{
            top: '92.9%',
            left: '11%',
            width: '320px',
            height: '55px',
          }}
        />
      )}
    </div>
  );
}
