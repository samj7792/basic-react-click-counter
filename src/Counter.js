import React from "react";

const Counter = ({ clicks, onClick }) => {
  return <button onClick={onClick}>{clicks}</button>;
};

export default Counter;
