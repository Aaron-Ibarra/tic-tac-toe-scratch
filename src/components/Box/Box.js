import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import './Box.css';

export default function Box({ content, space }) {
  const { setBoardState, boardState, currentPlayer, setCurrentPlayer } = useContext(GameContext);

  function handleBoxClick() {
    console.log(`You clicked on box number ${space}`);
  }

  return (
    <>
      <div className="box" onClick={handleBoxClick}>
        {content}
      </div>
    </>
  );
}
