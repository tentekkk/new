"use client";
import {useState, useEffect} from "react";
import {FaArrowRotateRight} from "react-icons/fa6";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const words = shuffle([1, 1, 2, 2, 3, 3]); // Shuffle only once

const Game = () => {
  const [grid, setGrid] = useState(words); // Shuffle words initially
  const [openIndices, setOpenIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);

  // Shuffle function (Fisher-Yates algorithm)

  const handleClick = (index) => {
    if (openIndices.length >= 2 || openIndices.includes(index) || matchedIndices.includes(index)) {
      return; // Prevent clicking more than 2 or already open/matched cards
    }

    setOpenIndices([...openIndices, index]);
  };

  useEffect(() => {
    let timeoutId;
    if (openIndices.length === 2) {
      const [firstIndex, secondIndex] = openIndices;
      if (grid[firstIndex] === grid[secondIndex]) {
        // Match!
        setMatchedIndices([...matchedIndices, firstIndex, secondIndex]);
        setOpenIndices([]);
      } else {
        // No match, close after a delay
        timeoutId = setTimeout(() => {
          setOpenIndices([]);
        }, 1000);
      }
    }
    return () => clearTimeout(timeoutId); // Clear timeout if component unmounts
  }, [openIndices, grid]);

  useEffect(() => {
    if (matchedIndices.length === grid.length) {
      // All pairs found
      alert("сглш🥳🥳");
    }
  }, [matchedIndices, grid]);

  const restartGame = () => {
    setGrid(shuffle(words));
    setOpenIndices([]);
    setMatchedIndices([]);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="grid grid-cols-3 gap-4">
        {grid.map((word, index) => (
          <div
            key={index}
            className={`w-16 h-16 bg-red-400 rounded-lg flex items-center justify-center text-white text-2xl cursor-pointer transition-transform transform hover:scale-110 ${
              openIndices.includes(index) || matchedIndices.includes(index) ? "bg-green-500" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {openIndices.includes(index) || matchedIndices.includes(index) ? word : ""}
          </div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-red-400 text-white rounded hover:bg-red-600" onClick={restartGame}>
        <FaArrowRotateRight className="" />
      </button>
    </div>
  );
};

export default Game;
