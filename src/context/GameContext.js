import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [boardState, setBoardState] = useState([
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

  return (
    <GameContext.Provider value={(boardState, setBoardState)}>{children}</GameContext.Provider>
  );
};

export { GameContext, GameProvider };
