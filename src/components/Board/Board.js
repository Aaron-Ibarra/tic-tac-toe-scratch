import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import Box from '../Box/Box.js';
import './Board.css';

export default function Board() {
  const { boardState, currentPlayer } = useContext(GameContext);
  return (
    <div className="game-board">
      {boardState.map((box) => (
        <Box key={box.space} {...box} />
      ))}
    </div>
  );
}
