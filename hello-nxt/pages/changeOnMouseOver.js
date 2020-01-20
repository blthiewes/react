import React, { useState } from "react";
import TextToggleOnMouseOver from "../src/TextToggleOnMouseOver";

const ChangeOnMouseOver = () => {
  return (
    <div>
        <TextToggleOnMouseOver primaryText="This Text" secondaryText="That Text" ></TextToggleOnMouseOver>
    </div>
  );
};

export default ChangeOnMouseOver;
