import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rulesBg from '../assets/images/rules.jpg';

export default function RulesScreen() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const toggleAgree = () => setAgreed(!agreed);
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
      {/* Галочка */}
      <div
        className="absolute flex items-center space-x-2"
        style={{ top: '780px', left: '68px' }}
      >
        <input
          id="agree"
          type="checkbox"
          checked={agreed}
          onChange={toggleAgree}
          className="w-5 h-5"
        />
        <label htmlFor="agree" className="text-white text-sm drop-shadow">
          Я прочитал и принимаю правила
        </label>
      </div>

      {/* Кнопка СОГЛАСЕН */}
      <button
        onClick={handleContinue}
        disabled={!agreed}
        className="absolute text-lg font-bold px-10 py-2 rounded bg-yellow-600 text-white hover:bg-yellow-500 transition-all disabled:opacity-50"
        style={{ top: '830px', left: '68px' }}
      >
        СОГЛАСЕН
      </button>
    </div>
  );
}
