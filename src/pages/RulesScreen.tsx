import React, { useState, useRef, useEffect, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import rulesImg from '../assets/images/rules.jpg';

export default function RulesScreen() {
  const [agreed, setAgreed] = useState(false);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const navigate = useNavigate();
  const imgRef = useRef<HTMLImageElement | null>(null);

  // После загрузки картинки — узнаём реальный рендер-размер
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

  // Координаты (от оригинала 768x1152)
  const calcStyle = (left: number, top: number, w: number, h: number): CSSProperties => ({
    position: 'absolute',
    left: `${(left / 768) * imgSize.width}px`,
    top: `${(top / 1152) * imgSize.height}px`,
    width: `${(w / 768) * imgSize.width}px`,
    height: `${(h / 1152) * imgSize.height}px`,
  });

  return (
    <div className="relative w-full max-w-md mx-auto">
      <img
        src={rulesImg}
        ref={imgRef}
        alt="Rules"
        className="w-full h-auto"
        style={{ aspectRatio: '768 / 1152' }}
      />

      {/* Галочка */}
      <div
        onClick={() => setAgreed(!agreed)}
        style={{
          ...calcStyle(90, 1010, 24, 24),
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
            ...calcStyle(85, 1074, 320, 55),
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '8px',
          }}
        />
      )}

      {/* Невидимая зона клика по кнопке */}
      {agreed && (
        <div
          onClick={() => navigate('/start')}
          style={{
            ...calcStyle(85, 1074, 320, 55),
            cursor: 'pointer',
          }}
        />
      )}
    </div>
  );
}
