import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import Box from '../Box/Box.js';
import './Board.css';

export default function Board() {
  const { boardState, currentPlayer } = useContext(GameContext);
  console.log('boardState', boardState);
  console.log('currentPlayer', currentPlayer);
  return (
    <div className="game-board">
      {boardState.map((box) => (
        <Box key={box.space} {...box} />
      ))}
    </div>
  );
}
