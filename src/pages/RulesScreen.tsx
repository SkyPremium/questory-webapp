import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rulesImg from '../assets/images/rules.jpg';

export default function RulesScreen() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const scale = (x: number, y: number, w: number, h: number): React.CSSProperties => ({
    position: 'absolute',
    left: `${(x / 768) * 100}%`,
    top: `${(y / 1024) * 100}%`,
    width: `${(w / 768) * 100}%`,
    height: `${(h / 1024) * 100}%`,
  });

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="relative w-full max-w-[768px]" style={{ aspectRatio: '3 / 4' }}>
        <img
          src={rulesImg}
          alt="Правила"
          className="w-full h-full object-cover absolute top-0 left-0"
        />

        {/* Галочка */}
        <div
          onClick={() => setAgreed(!agreed)}
          style={{
            ...scale(90, 906, 24, 24),
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
              style={{ width: '14px', height: '14px' }}
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>

        {/* Затемнение кнопки */}
        {!agreed && (
          <div
            style={{
              ...scale(88, 968, 312, 46),
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '8px',
            }}
          />
        )}

        {/* Кликабельная зона */}
        {agreed && (
          <div
            onClick={() => navigate('/start')}
            style={{
              ...scale(88, 968, 312, 46),
              cursor: 'pointer',
            }}
          />
        )}
      </div>
    </div>
  );
}
