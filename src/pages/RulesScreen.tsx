import React, { useState } from 'react'
import rulesImage from '@/assets/images/rules.jpg' // теперь будет работать
import './RulesScreen.css'

export default function RulesScreen() {
  const [accepted, setAccepted] = useState(false)

  return (
    <div className="rules-screen">
      <img src={rulesImage} className="rules-image" />
      <input
        type="checkbox"
        className="rules-checkbox"
        checked={accepted}
        onChange={() => setAccepted(!accepted)}
      />
      <button className="rules-button" disabled={!accepted}>
        СОГЛАСЕН
      </button>
    </div>
  )
}
