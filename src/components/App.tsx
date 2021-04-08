import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import logo from '../assets/dice-stats-logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThrowsHistogram from './ThrowsHistogram';
import Dices from './Dices';
import EndGameButton from './EndGameButton';

interface TurnBoardProps {
  onTerminatedTurn: (num: number) => void;
  throws: number[];
}

const TurnBoard = (props: TurnBoardProps) => {

  const [turn, setTurn] = useState(1);
  
  const [nextTurnDisabled, setNextTurnDisabled] = useState(true);
  const [currentThrow, setCurrentThrow] = useState(0);

  const handleNextTurn = () => {
    if(currentThrow > 0) {
      setTurn(turn + 1);
      props.onTerminatedTurn(currentThrow);
      setCurrentThrow(0);
      setNextTurnDisabled(true);
    }
  }

  const handleThrowResolution = (num: number) => {
    setCurrentThrow(num);
    setNextTurnDisabled(false);
  }

  return (
    <div className="turn-board">
      <div className="turn-indicator">Turn: {turn}</div>
      <Dices key={turn} onThrowResolution={handleThrowResolution} />
      <Button disabled={nextTurnDisabled} variant="outlined" color="primary" onClick={handleNextTurn}>Next turn</Button>
      <ThrowsHistogram throws={props.throws} onBarClick={(data: any, index: any) => {
        console.debug(`Number ${data.num} has been rolled ${data.count} times. Element is at index ${index}`);
    }} />
    </div>
  );
}

function App() {
  const [gameId, setGameId] = useState(1);
  const [throws, setThrows] = useState(Array<number>());

  const handleEndGame = () => {
    setGameId(gameId + 1);
  }

  const handleTerminatedTurn = (num: number) => {
    setThrows([...throws, num]);
  }

  return (
    <>
    <CssBaseline />
    <div className="app">
      <header className="app-header">
        <h1><img src={logo} className="app-logo" alt="logo" />Dice Stats<img src={logo} className="app-logo" alt="logo" /></h1>
        <p>
          Play your dice-based game! <br/>I'll keep track of the stats ;-)
        </p>
      </header>
      <TurnBoard key={gameId} throws={throws} onTerminatedTurn={handleTerminatedTurn} />
      <EndGameButton throws={throws} />
    </div>
    </>
  );
}

export default App;
