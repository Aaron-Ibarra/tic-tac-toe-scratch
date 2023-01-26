import './App.css';
import { useContext } from 'react';
import { GameContext } from './context/GameContext.js';

function App() {
  const { boardState } = useContext(GameContext);
  return <div className="App"></div>;
}

export default App;
