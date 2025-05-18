import React, { useState, useRef, useEffect, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import rulesImg from '../assets/images/rules.jpg'; // не забудь положить сюда картинку 768×1024

export default function RulesScreen() {
  const [agreed, setAgreed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const updateSize = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        setImgSize({ width: rect.width, height: rect.height });
      }
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // координаты по картинке 768x1024
  const scale = (x: number, y: number, w: number, h: number): CSSProperties => ({
    position: 'absolute',
    left: (x / 768) * imgSize.width,
    top: (y / 1024) * imgSize.height,
    width: (w / 768) * imgSize.width,
    height: (h / 1024) * imgSize.height,
  });

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-md">
        <img
          ref={imgRef}
          src={rulesImg}
          alt="Правила"
          className="w-full h-auto block"
          style={{ aspectRatio: '768 / 1024' }}
        />

        {/* Галочка — пиксельно выровнена */}
        <div
          onClick={() => setAgreed(!agreed)}
          style={{
            ...scale(92, 905, 26, 26), // точные координаты и размер
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
              ...scale(88, 962, 308, 48), // координаты по кнопке
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '8px',
            }}
          />
        )}

        {/* Кликабельная область по кнопке */}
        {agreed && (
          <div
            onClick={() => navigate('/start')}
            style={{
              ...scale(88, 962, 308, 48),
              cursor: 'pointer',
            }}
          />
        )}
      </div>
    </div>
  );
}
