import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState("It's X's turn!");
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

  function gameConditionCheck() {
    // CHECKS IF ALL SQUARES ARE FILLED
    let filledBoxes = 0;
    boardState.map((box) => {
      if (box.content !== '') {
        filledBoxes++;
      }
    });

    console.log('boardState[0].content', boardState[0].content === boardState[1].content);
    if (
      boardState[0].content === boardState[1].content &&
      boardState[0].content === boardState[2].content
    ) {
      setActive(false);
      console.log('WOOHOO');
      setGameMessage(`Player ${currentPlayer} has won!!`);
    } else if (filledBoxes === 9) {
      setActive(false);
      setGameMessage('Nobody won that sucks');
    }
  }

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
        gameConditionCheck,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
