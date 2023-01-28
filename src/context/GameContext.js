import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState(`It's ${currentPlayer}'s turn!`);
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
    //Increments for every box filled
    let filledBoxes = 0;
    boardState.map((box) => {
      if (box.content !== '') {
        filledBoxes++;
      }
    });

    if (
      //First Row Win
      (boardState[0].content === 'X' &&
        boardState[1].content === 'X' &&
        boardState[2].content === 'X') ||
      (boardState[0].content === 'O' &&
        boardState[1].content === 'O' &&
        boardState[2].content === 'O') ||
      //Second Row Win
      (boardState[3].content === 'X' &&
        boardState[4].content === 'X' &&
        boardState[5].content === 'X') ||
      (boardState[3].content === 'O' &&
        boardState[4].content === 'O' &&
        boardState[5].content === 'O') ||
      //Third Row Win
      (boardState[6].content === 'X' &&
        boardState[7].content === 'X' &&
        boardState[8].content === 'X') ||
      (boardState[6].content === 'O' &&
        boardState[7].content === 'O' &&
        boardState[8].content === 'O') ||
      //First Column Win
      (boardState[0].content === 'X' &&
        boardState[3].content === 'X' &&
        boardState[6].content === 'X') ||
      (boardState[0].content === 'O' &&
        boardState[3].content === 'O' &&
        boardState[6].content === 'O') ||
      //Second Column Win
      (boardState[1].content === 'X' &&
        boardState[4].content === 'X' &&
        boardState[7].content === 'X') ||
      (boardState[1].content === 'O' &&
        boardState[4].content === 'O' &&
        boardState[7].content === 'O') ||
      //Third Column Win
      (boardState[2].content === 'X' &&
        boardState[5].content === 'X' &&
        boardState[8].content === 'X') ||
      (boardState[2].content === 'O' &&
        boardState[5].content === 'O' &&
        boardState[8].content === 'O') ||
      //Left to Right diagonal
      (boardState[0].content === 'X' &&
        boardState[4].content === 'X' &&
        boardState[8].content === 'X') ||
      (boardState[0].content === 'O' &&
        boardState[4].content === 'O' &&
        boardState[8].content === 'O') ||
      //Right to Left diagonal
      (boardState[2].content === 'X' &&
        boardState[4].content === 'X' &&
        boardState[6].content === 'X') ||
      (boardState[2].content === 'O' &&
        boardState[4].content === 'O' &&
        boardState[6].content === 'O')
    ) {
      setActive(false);
      setGameMessage(`Player ${currentPlayer} has won!!`);
    } else if (filledBoxes === 9) {
      //Checks if all boxes are filled
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
