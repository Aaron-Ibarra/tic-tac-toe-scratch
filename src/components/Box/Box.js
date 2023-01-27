import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import './Box.css';

export default function Box({ content, space }) {
  const { setBoardState, boardState, currentPlayer, setCurrentPlayer, active, setActive } =
    useContext(GameContext);

  function handleBoxClick() {
    if (active === false) {
      console.log('The game is over!');
      return;
    } else if (content === 'X' || content === 'O') {
      console.log('This space is taken!');
      return;
    } else if (currentPlayer === 'O') {
      console.log('O just placed one');
      setCurrentPlayer('X');
    } else if (currentPlayer === 'X') {
      console.log('X just placed one');
      setCurrentPlayer('O');
    }

    const newBoard = [...boardState];
    newBoard[space - 1].content = currentPlayer;
    setBoardState(newBoard);
  }

  return (
    <>
      <div className="box" onClick={handleBoxClick}>
        {content}
      </div>
    </>
  );
}
