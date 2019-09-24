import React from "react";
import StarsDisplay from "./star-display";
import PlayNumber from "./play-number";
import PlayAgain from "./play-again";
import utils from "../math-utils";
import useGameState from "./use-game-state";

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

  export default Game;