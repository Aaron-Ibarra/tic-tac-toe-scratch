import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import './Message.css';

export default function Message() {
  const { gameMessage } = useContext(GameContext);
  return <h1 className="game-message">{gameMessage}</h1>;
}
