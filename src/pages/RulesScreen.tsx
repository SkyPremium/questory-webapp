import React, { useState } from 'react'
import './RulesScreen.css'
import rulesBackground from '../assets/images/rules.jpg'

export default function RulesScreen() {
  const [accepted, setAccepted] = useState(false)

  return (
    <div
      className="rules-container"
      style={{ backgroundImage: `url(${rulesBackground})` }}
    >
      <div className="rules-overlay">
        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
          />
          <span className="checkbox-label">Я прочитал и принимаю правила</span>
        </label>
        <button
          className="confirm-button"
          disabled={!accepted}
        >
          СОГЛАСЕН
        </button>
      </div>
    </div>
  )
}
