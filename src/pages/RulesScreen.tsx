import React, { useState } from 'react'
import './RulesScreen.css'

export default function RulesScreen() {
  const [accepted, setAccepted] = useState(false)

  return (
    <div className="rules-wrapper">
      <div className="overlay-ui">
        <label className="checkbox-area">
          <input
            type="checkbox"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
          />
          <span>Я прочитал и принимаю правила</span>
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
