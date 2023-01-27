import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import './Message.css';

export default function Message() {
  const { currentPlayer } = useContext(GameContext);
  return <h1 className="game-message">It is {currentPlayer}&apos;s turn!</h1>;
}
