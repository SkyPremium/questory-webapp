import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundUrl from '../assets/images/rules.jpg'; // 768×1024

export default function RulesScreen() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  // Координаты для фонового масштаба (по экрану, не по картинке)
  const scale = (x: number, y: number, w: number, h: number): React.CSSProperties => ({
    position: 'absolute',
    left: `${(x / 768) * 100}vw`,
    top: `${(y / 1024) * 100}vh`,
    width: `${(w / 768) * 100}vw`,
    height: `${(h / 1024) * 100}vh`,
  });

  return (
    <div
      className="w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
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

      {/* Кликабельная кнопка */}
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
  );
}
