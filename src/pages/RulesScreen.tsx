import React, { useState, useRef, useEffect, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import rulesImg from '../assets/images/rules.jpg'; // 768×1024

export default function RulesScreen() {
  const [agreed, setAgreed] = useState(false);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const imgRef = useRef<HTMLImageElement | null>(null);
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

  const scale = (x: number, y: number, w: number, h: number): CSSProperties => ({
    position: 'absolute',
    left: (x / 768) * imgSize.width,
    top: (y / 1024) * imgSize.height,
    width: (w / 768) * imgSize.width,
    height: (h / 1024) * imgSize.height,
  });

  return (
    <div className="w-full">
      <div className="relative mx-auto" style={{ maxWidth: '768px' }}>
        {/* Картинка задаёт точную высоту блока */}
        <img
          ref={imgRef}
          src={rulesImg}
          alt="Правила"
          className="block w-full h-auto"
          style={{ display: 'block' }}
        />

        {/* Галочка */}
        <div
          onClick={() => setAgreed(!agreed)}
          style={{
            ...scale(90, 910, 24, 24),
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
