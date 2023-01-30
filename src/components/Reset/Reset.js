import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import './Reset.css';

export default function Reset() {
  const { setBoardState, setGameMessage, setCurrentPlayer, setActive } = useContext(GameContext);

  function resetGame() {
    setBoardState([
      { space: 1, content: '' },
      { space: 2, content: '' },
      { space: 3, content: '' },
      { space: 4, content: '' },
      { space: 5, content: '' },
      { space: 6, content: '' },
      { space: 7, content: '' },
      { space: 8, content: '' },
      { space: 9, content: '' },
    ]);
    setCurrentPlayer('X');
    setGameMessage(`It's X's turn!`);
    setActive(true);
  }

  return <button onClick={resetGame}>Reset</button>;
}
