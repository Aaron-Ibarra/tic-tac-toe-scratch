import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(false);
  const [gameMessage, setGameMessage] = useState("It's O's turn!");
  const [boardState, setBoardState] = useState([
    { space: 1, content: 'X' },
    { space: 2, content: 'O' },
    { space: 3, content: '' },
    { space: 4, content: '' },
    { space: 5, content: 'X' },
    { space: 6, content: 'X' },
    { space: 7, content: 'X' },
    { space: 8, content: '' },
    { space: 9, content: 'O' },
  ]);

  return (
    <GameContext.Provider
      value={{
        boardState,
        setBoardState,
        active,
        setActive,
        gameMessage,
        setGameMessage,
        currentPlayer,
        setCurrentPlayer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
