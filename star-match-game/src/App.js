import React from 'react';
import './App.css';

function App() {

  const StarsDisplay = props => (
    <>
    {utils.range(1, props.count).map(starId => 
        <div key={starId} className="star" />
      )}
    </>
  );

  const PlayNumber = (props) => {
    return (
      <button 
        key={props.number} 
        className='number' 
        style={{backgroundColor: colors[props.status]}}
        onClick={() => props.onClick(props.number, props.status)}>
          {props.number}
      </button>
    );
  };

  const PlayAgain = (props) => {

    return (
      <button onClick={() => props.onClick()}>Play Again</button>
    );

  };

  const StarMatch = () => {
    //state of object
    const [stars, setStars] = React.useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = React.useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = React.useState([]);

    const candidatesAreWrong = utils.sum(candidateNums) > stars;

    const gameIsDone = availableNums.length === 0;

    const numberStatus = (number) => {
      if(!availableNums.includes(number)){
        return 'used';
      }
      if(candidateNums.includes(number)){
        return candidatesAreWrong ? 'wrong' : 'candidate';
      }
      return 'available';
    };

    const onNumberClick = (number, currenctStatus) => {

      if(currenctStatus === 'used'){
        return;
      }
      const newCandidateNums = 
        currenctStatus === 'available' 
          ? candidateNums.concat(number)
          : candidateNums.filter(cn => cn !== number);
      if(utils.sum(newCandidateNums) !== stars) {
        setCandidateNums(newCandidateNums);
      } else {
        const newAvailableNums = availableNums.filter(
          n => !newCandidateNums.includes(n)
        );
        setStars(utils.randomSumIn(newAvailableNums, 9))
        setAvailableNums(newAvailableNums);
        setCandidateNums([]);
      }
    };

    const onPlayAgainClick = () => {
      setStars(utils.random(1, 9));
      setAvailableNums(utils.range(1, 9));
      setCandidateNums([]);
  
    };

    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            {gameIsDone ? (
                <PlayAgain onClick={onPlayAgainClick}/>
              ) : (
                <StarsDisplay count={stars}/>
              )
            }
          </div>
          <div className="right">
            {utils.range(1, 9).map(number =>
              <PlayNumber 
                key={number} 
                number={number}
                status={numberStatus(number)}
                onClick={onNumberClick}
              />
            )}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };

  const colors = {

    available: 'lightgrey',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue'
  };

  const utils = {
    // Sum an array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
  
    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  
    // pick a random number between min and max (edges included)
    random: (min, max) => min + Math.floor(max * Math.random()),
  
    // Given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
      const sets = [[]];
      const sums = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
          const candidateSet = sets[j].concat(arr[i]);
          const candidateSum = utils.sum(candidateSet);
          if (candidateSum <= max) {
            sets.push(candidateSet);
            sums.push(candidateSum);
          }
        }
      }
      return sums[utils.random(0, sums.length)];
    },
  };

  return (
    <div className="App">
      <StarMatch></StarMatch>
    </div>
  );
}

export default App;
