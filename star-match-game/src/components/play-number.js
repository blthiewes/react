import React from "react";
import colors from "./colors";

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

  export default PlayNumber;