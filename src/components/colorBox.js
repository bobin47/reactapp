import React, { useState } from "react";

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "deeppink";
    return initColor;
  });

  const getRandomColor = () => {
    const colorList = ["deeppink", "green", "red", "black", "white"];
    const randomIndex = Math.trunc(Math.random() * 5);
    return colorList[randomIndex];
  };

  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box-color", newColor);
  };

  return (
    <div>
      <div
        className="color-box"
        style={{ background: color }}
        onClick={handleBoxClick}
      >
        hello
      </div>
    </div>
  );
}

export default ColorBox;
