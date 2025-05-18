import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import rulesImg from '../assets/images/rules.jpg'; // 768×1024

export default function RulesScreen() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 1, height: 1 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setSize({ width: rect.width, height: rect.height });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const scale = (x: number, y: number, w: number, h: number): React.CSSProperties => ({
    position: 'absolute',
    left: `${(x / 768) * size.width}px`,
    top: `${(y / 1024) * size.height}px`,
    width: `${(w / 768) * size.width}px`,
    height: `${(h / 1024) * size.height}px`,
  });

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <div
        className="relative w-full max-w-[768px]"
        style={{ aspectRatio: '3 / 4' }}
        ref={containerRef}
      >
        <img
          src={rulesImg}
          alt="Правила"
          className="w-full h-full object-cover absolute inset-0"
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

        {/* Кнопка */}
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
