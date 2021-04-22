import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import ManualThrowButton from './ManualThrowButton';
import utils from '../../utils/math';

interface DiceProps {
    value: number;
}

const Dice = (props: DiceProps) => {
    return (
        <div className="dice">{props.value}</div>
    );
}

interface DicesProps {
    onThrowResolution: (num: number) => void;
}

const Dices = (props: DicesProps) => {
    const [currentDices, setCurrentDices] = useState([0,0]);

    const handleDiceThrow = () => {
        const dice1 = utils.random(1,6);
        const dice2 = utils.random(1,6);
        setCurrentDices([dice1, dice2]);
        props.onThrowResolution(dice1 + dice2);
    }

    const handleManualThrow = (num: number) => {
        setCurrentDices([Math.floor(num/2), Math.ceil(num/2)]);
        props.onThrowResolution(num);
    }

    return (
        <>
        <div className="dices">
          <Dice value={currentDices[0]} />
          <Dice value={currentDices[1]} />
        </div>
        <div>
            <Button variant="outlined" color="primary" onClick={handleDiceThrow}>Throw dices</Button>
            <ManualThrowButton onClose={handleManualThrow} />
        </div>
        </>
    );
}

export default Dices;