import React, {useState} from 'react';
import logo from '../assets/dice-stats-logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import StatsPanel from './StatsPanel';
import Dices from './Dices';

const TurnBoard = () => {

  const [turn, setTurn] = useState(1);
  const [throws, setThrows] = useState(Array<number>()); 

  let currentThrow: number = 0;

  const handleNextTurn = () => {
    setTurn(turn + 1);
    setThrows([...throws, currentThrow]);
  }

  return (
    <>
    <CssBaseline />
    <div className="turn-board">
      <div className="turn-indicator">Turn: {turn}</div>
      <Dices onThrowResolution={(num: number) => currentThrow = num} />
      <div className="actions">
        <button onClick={handleNextTurn}>Next turn</button>
        <button>End game</button>
      </div>
      <StatsPanel throws={throws} />
    </div>
    </>
  );
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1><img src={logo} className="app-logo" alt="logo" />Dice Stats<img src={logo} className="app-logo" alt="logo" /></h1>
        <p>
          Play your dice-based game! <br/>I'll keep track of the stats ;-)
        </p>
      </header>
      <TurnBoard />
    </div>
  );
}

export default App;
