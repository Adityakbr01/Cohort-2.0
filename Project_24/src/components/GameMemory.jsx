import { useEffect, useState } from "react";

function GameMemory() {
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disable, setDisabled] = useState(false);
  const [won, setWon] = useState(false);

  // 🧩 Handle grid size input change
  const HandleGridSizeChange = (e) => {
    const size = parseInt(e.target.value);
    if (!isNaN(size) && size >= 2 && size <= 20) {
      setGridSize(size);
    }
  };

  // 🎴 Initialize or shuffle cards based on grid size
  const handleInitilizeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCounts = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCounts).keys()].map((n) => n + 1);

    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((number, idx) => ({ id: idx, number }));

    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setWon(false);
  };

  // 🔁 Reinitialize when grid size changes
  useEffect(() => {
    handleInitilizeGame();
  }, [gridSize]);

  // 🖱 Handle user clicking a card
  const HandleCardClick = (id) => {
    if (disable || won) return;

    // ignore clicking same card twice or already solved
    if (flipped.includes(id) || solved.includes(id)) return;

    // flip first card
    if (flipped.length === 0) {
      setFlipped([id]);
      return;
    }

    // flip second card
    const firstCard = cards.find((c) => c.id === flipped[0]);
    const secondCard = cards.find((c) => c.id === id);

    setFlipped([...flipped, id]);
    setDisabled(true);

    // check match after small delay
    setTimeout(() => {
      if (firstCard.number === secondCard.number) {
        // ✅ matched
        setSolved([...solved, firstCard.id, secondCard.id]);
        setFlipped([]);
      } else {
        // ❌ not matched
        setFlipped([]);
      }
      setDisabled(false);
    }, 800);
  };

  // 🔎 Utility to check flipped state
  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);

  // 🏁 Check win condition
  useEffect(() => {
    if (cards.length > 0 && solved.length === cards.length) {
      setWon(true);
    }
  }, [solved, cards]);

  // 🔁 Restart game
  const handleRestart = () => {
    handleInitilizeGame();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4 w-full relative overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,#e0e7ff_0%,transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,#c7d2fe_0%,transparent_50%)]"></div>
      </div>

      <h1 className="title text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg relative z-10">
        🧠 Memory Mastery
      </h1>

      <div className="inputContainer mb-8 flex gap-4 items-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 relative z-10">
        <label htmlFor="gridSize" className="text-gray-700 font-semibold">
          Grid Size: (2–20)
        </label>
        <input
          type="number"
          id="gridSize"
          min={2}
          max={20}
          value={gridSize}
          onChange={HandleGridSizeChange}
          className="border border-gray-300 rounded-xl p-2 w-20 text-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm"
        />
        <button
          onClick={handleRestart}
          className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
        >
          🔄 Restart
        </button>
      </div>

      {won && (
        <div className="mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold text-xl md:text-2xl px-8 py-4 rounded-2xl shadow-xl relative z-10 animate-bounce">
          🎉 Congratulations! You Won the Game! 🏆
        </div>
      )}

      <div className="GameBoardContainer flex justify-center w-full">
  <div
    className="grid gap-3 sm:gap-4"
    style={{
      gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      width: `min(90vw, ${gridSize * 6}rem)`, // responsive limit
      maxWidth: "1000px", // avoid over-expanding on large screens
    }}
  >
    {cards.map((card) => {
      const flippedState = isFlipped(card.id);
      return (
        <div
          key={card.id}
          onClick={() => HandleCardClick(card.id)}
          className="relative w-full aspect-square cursor-pointer perspective"
        >
          {/* Flip container */}
          <div
            className={`absolute inset-0 transition-transform duration-500 transform-style-preserve-3d ${
              flippedState ? "rotate-y-180" : ""
            }`}
          >
            {/* Front side */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 rounded-xl shadow-md flex items-center justify-center text-3xl font-bold text-gray-600 border border-gray-300 backface-hidden">
              ?
            </div>

            {/* Back side */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg flex items-center justify-center text-3xl font-bold text-white border border-blue-400 rotate-y-180 backface-hidden">
              {card.number}
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>


      {/* Stats footer */}
      <div className="mt-8 text-center text-gray-600 relative z-10">
        <p className="text-sm">Moves: {solved.length / 2} | Pairs Found: {solved.length / 2}</p>
      </div>
    </div>
  );
}

export default GameMemory;