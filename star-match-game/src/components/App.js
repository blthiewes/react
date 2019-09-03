import React from "react";
import StarsDisplay from "./star-display"
import utils from "../math-utils";

function App() {

  const PlayNumber = props => {
    return (
      <button
        key={props.number}
        className="number"
        style={{ backgroundColor: colors[props.status] }}
        onClick={() => props.onClick(props.number, props.status)}
      >
        {props.number}
      </button>
    );
  };

  const PlayAgain = props => (
    <div className="game-done">
      <div
        className="message"
        style={{ color: props.gameStatus === "lost" ? "red" : "green" }}
      >
        {props.gameStatus === "lost" ? "Game Over" : "Nice"}
      </div>
      <button onClick={() => props.onClick()}>Play Again</button>
    </div>
  );

  // Custom Hook
  const useGameState = () => {
    const [stars, setStars] = React.useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = React.useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = React.useState([]);
    const [secondsLeft, setSecondsLeft] = React.useState(10);

    React.useEffect(() => {
      if (secondsLeft > 0 && availableNums.length > 0) {
        const timerId = setTimeout(() => {
          setSecondsLeft(secondsLeft - 1);
        }, 1000);
        return () => clearTimeout(timerId);
      }
    });

    const setGameState = newCandidateNums => {
      if (utils.sum(newCandidateNums) !== stars) {
        setCandidateNums(newCandidateNums);
      } else {
        const newAvailableNums = availableNums.filter(
          n => !newCandidateNums.includes(n)
        );
        setStars(utils.randomSumIn(newAvailableNums, 9));
        setAvailableNums(newAvailableNums);
        setCandidateNums([]);
      }
    };

    return {
      stars,
      availableNums,
      candidateNums,
      secondsLeft,
      setGameState
    };
  };

  const Game = props => {
    const {
      stars,
      availableNums,
      candidateNums,
      secondsLeft,
      setGameState
    } = useGameState();

    const candidatesAreWrong = utils.sum(candidateNums) > stars;

    const gameStatus =
      availableNums.length === 0
        ? "won"
        : secondsLeft === 0
        ? "lost"
        : "active";

    const numberStatus = number => {
      if (!availableNums.includes(number)) {
        return "used";
      }
      if (candidateNums.includes(number)) {
        return candidatesAreWrong ? "wrong" : "candidate";
      }
      return "available";
    };

    const onNumberClick = (number, currenctStatus) => {
      if (currenctStatus === "used") {
        return;
      }
      if (gameStatus !== "active") {
        return;
      }
      const newCandidateNums =
        currenctStatus === "available"
          ? candidateNums.concat(number)
          : candidateNums.filter(cn => cn !== number);

      setGameState(newCandidateNums);
    };

    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            {gameStatus !== "active" ? (
              <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
            ) : (
              <StarsDisplay count={stars} />
            )}
          </div>
          <div className="right">
            {utils.range(1, 9).map(number => (
              <PlayNumber
                key={number}
                number={number}
                status={numberStatus(number)}
                onClick={onNumberClick}
              />
            ))}
          </div>
        </div>
        <div className="timer">Time Remaining: {secondsLeft}</div>
      </div>
    );
  };

  const StarMatch = () => {
    const [gameId, setGameId] = React.useState(1);
    return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
  };

  const colors = {
    available: "lightgrey",
    used: "lightgreen",
    wrong: "lightcoral",
    candidate: "deepskyblue"
  };

    return (
    <div className="App">
      <StarMatch />
    </div>
  );
}

export default App;
