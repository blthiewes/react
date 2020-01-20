import React, { useRef } from "react";

const TextToggleOnMouseOver = ({ primaryText, secondaryText }) => {
  const textRef = useRef(null);

  return (
    <input
      onMouseOver={() => {
        textRef.current.value = secondaryText;
        console.log(secondaryText);
      }}
      onMouseOut={() => {
        textRef.current.value = primaryText;
        console.log(primaryText);
      }}
      ref={textRef}
      value={primaryText}
    >
      
    </input>
  );
};

export default TextToggleOnMouseOver;
