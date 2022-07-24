import React from "react";

export const Button = (props: any) => {
  const handleClick = () => {
    alert("Woooha!");
  };

  return (
    <button onClick={handleClick} {...props}>
      Click Me
    </button>
  );
};
