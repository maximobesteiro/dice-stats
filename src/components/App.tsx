import React, {useState} from 'react';
import logo from '../assets/dice-stats-logo.svg';
import './App.css';
import utils from '../utils';

const TurnBoard = () => {

  const [turn, setTurn] = useState(1);
  const [throws, setThrows] = useState(Array<Array<number>>());
  const [currentDices, setCurrentDices] = useState([1,1]);

  const handleDiceThrow = () => {
    setCurrentDices([utils.random(1,6), utils.random(1,6)]);
  }

  const handleNextTurn = () => {
    setTurn(turn + 1);
    setThrows([...throws, currentDices]);
  }

  return (
    <div className="turn-board">
        <div className="turn-indicator">Turn: {turn}</div>
        <div className="dices">
          <Dice value={currentDices[0]} />
          <Dice value={currentDices[1]} />
        </div>
        <div className="actions">
          <button onClick={handleDiceThrow}>Throw dices</button>
          <button>Manual throw</button>
          <button onClick={handleNextTurn}>Next turn</button>
          <button>End game</button>
        </div>
      </div>
  );
}

const Dice = (props: any) => {
  return (
    <div className="dice">{props.value}</div>
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
