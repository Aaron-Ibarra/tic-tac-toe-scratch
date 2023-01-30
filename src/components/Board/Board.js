import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import Box from '../Box/Box.js';
import Message from '../Message/Message.js';
import Reset from '../Reset/Reset.js';
import './Board.css';
// import Cheerio from './assets/cheerio.png';

export default function Board() {
  const { boardState } = useContext(GameContext);
  return (
    <div className="game">
      <Message />
      <div className="game-board">
        {boardState.map((box) => (
          <Box key={box.space} {...box} />
        ))}
      </div>
      <Reset />
      <img src></img>
    </div>
  );
}
