import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import './Box.css';

export default function Box({ content, space }) {
  const {
    setBoardState,
    boardState,
    currentPlayer,
    setCurrentPlayer,
    active,
    setGameMessage,
    gameConditionCheck,
  } = useContext(GameContext);

  function handleBoxClick() {
    if (active === false) {
      return;
    } else if (content === 'X' || content === 'O') {
      return;
    } else if (currentPlayer === 'O') {
      setCurrentPlayer('X');
      setGameMessage("It's X's turn now!");
    } else if (currentPlayer === 'X') {
      setCurrentPlayer('O');
      setGameMessage("It's O's turn now!");
    }

    const newBoard = [...boardState];
    newBoard[space - 1].content = currentPlayer;
    setBoardState(newBoard);

    gameConditionCheck();
  }

  return (
    <>
      <div className="box" onClick={handleBoxClick}>
        {content}
      </div>
    </>
  );
}
