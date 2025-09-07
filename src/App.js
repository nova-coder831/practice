import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const renderGrid = () => {
    const arr = Array.from(new Array(3), () => new Array(3).fill(0));
    // const arr = new Array(3).fill(null).map(() => new Array(3).fill(null))
    console.log(arr);

    return arr.map((item, i) => (
      <div className="board-row">
        {item.map((_, j) => (
          <Square
            value={state[i * 3 + j]}
            onSquareClick={() => handleClick(i * 3 + j)}
          />
        ))}
      </div>
    ));
  };

  const handleClick = (idx) => {
    if (state[idx]) return;
    const newState = [...state];
    newState[idx] = isXNext ? "X" : "O";
    setIsXNext(!isXNext);
    setState(newState);
  };

  return (
    <>
      {renderGrid()}
      <span>接下来是：{isXNext ? "X" : "O"}</span>
    </>
  );
};

export default Board;
