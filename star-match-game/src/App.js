import React from 'react';
import './App.css';

function App() {

  const Number = (props) => {
    return (
      <button key={props.number} className='number'>{props.number}</button>
    );
  };

  const StarMatch = () =>{
    const range = [1,2,3,4,5,6,7,8,9];
    return (
      <div className="game">
        Game
        {
        range.map(number => 
          <Number key={number} number={number}></Number>
        )}
      </div>
    );
  };

  return (
    <div className="App">
      <StarMatch></StarMatch>
    </div>
  );
}

export default App;
