import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";


function deruveActuveplayer (gameTurn){
  let currentplayer = "X";

  if (prvturn.length > 0 && prvturn[0].Player === "X") {
    currentplayer = "O";
  }
  return currentplayer;

}
function App() {
  const [gameTurn, setgameTurn] = useState([]);
  // const [activePlayer, setactivePlayer] = useState("X");

  const activePlayer=deruveActuveplayer(gameTurn)

  function handleSelectSquare(rowIndex, colIndex) {
    // setactivePlayer((prvsactiveplayer) =>   (prvsactiveplayer === "X" ? "O" : "X"));
    setgameTurn((prvturn) => {
      const currentplayer= deruveActuveplayer(prvturn);

      const updatedturn = [
        { square: { row: rowIndex, col: colIndex }, player: currentplayer },
        ...prvturn,
      ];

      return updatedturn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>

        <GameBoard
         onSelectSquare={handleSelectSquare}
         turns={gameTurn} 
         
         />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App
