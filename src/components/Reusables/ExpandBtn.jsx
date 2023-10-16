/* eslint-disable react/prop-types */
import { useState } from "react";

/*
The logic here allows me to pass in a color value as a prop to determine the color
scheme of the component so it matches well with eithe white space or colored space

* I may refactor this code by using only classes and the color prop to improve readability,
* instead of using so many inline style props which causes unpredictable behaviors and messy code
*/

export const ExpandBtn = ({ text, color, primaryColor }) => {
  const [currentColor, setCurrentColor] = useState(
    color === "light" ? primaryColor : "#fff"
  );
  const initialBorder =
    color === "light" ? `solid 1.5px ${primaryColor}` : " solid 1.5px #fff";

  const [currentBorder, setCurrentBorder] = useState(initialBorder);

  return (
    <button
      onMouseLeave={() => {
        setCurrentColor(color === "light" ? primaryColor : "#fff");
        setCurrentBorder(
          color === "light"
            ? `solid 1.5px ${primaryColor}`
            : " solid 1.5px #fff"
        );
      }}
      onMouseEnter={() => {
        setCurrentColor(color === "light" ? "#fff" : primaryColor);
        setCurrentBorder("none");
      }}
      style={{
        border: currentBorder,
        textTransform: "capitalize",
        backgroundColor: "transparent",
      }}
      className="expand-btn"
    >
      {/* this ternary seems to have no effect on the button, I cannot
        get the bacgkournd of the button to be white */}
      <div className={color === "light" ? "fill-color" : "white-color"}></div>
      <span
        style={{
          position: "absolute",
          zIndex: "1",
          color: currentColor,
        }}
      >
        {text}
      </span>
    </button>
  );
};
