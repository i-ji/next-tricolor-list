import React from "react";

interface ColorBallProps {
  shoppingColor: string;
  bringColor: string;
  todoColor: string;
}

const ColorBall = ({
  shoppingColor,
  bringColor,
  todoColor,
}: ColorBallProps) => {
  return (
    <div
      className={`bg-gradient-to-r from-${shoppingColor} via-${bringColor} to-${todoColor} h-8 sm:h-9 w-8 sm:w-9 rounded-full cursor-pointer`}
    ></div>
  );
};

export default ColorBall;
