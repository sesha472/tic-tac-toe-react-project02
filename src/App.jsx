import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/Winning-combinations";
import Gameover from "./components/Gameover";


const intialGameboard=[
  [null,null,null],
  [null,null,null],
  [null,null,null],
];

function derivedActiveplayer( gameTurns ){
  let currentplayer = "X" ;

  if (gameTurns.length > 0 && gameTurns[0].Player === "X") {
     currentplayer = "O";
  }

  return currentplayer;
}

function App() {
  const [gameTurns, setgameTurn] = useState([]);
  // const [Haswinner, setHaswinner] = useState(false);
  // const [activePlayer, setactivePlayer] = useState("X");


  const activePlayer=derivedActiveplayer(gameTurns);

  let gameboard=[...intialGameboard.map(arr=>[...arr])];

  for (const turn of gameTurns) {
     const {square,player}=turn;
     const {row,col}=square;

     gameboard[row][col]=player;
  }

  let winner;
  for (const combinations of WINNING_COMBINATIONS){
    const firstSquare=gameboard[combinations[0].row][combinations[0].column];
    const secondSquare=gameboard[combinations[1].row][combinations[1].column];
    const thirdSquare=gameboard[combinations[2].row][combinations[2].column];
 
    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = firstSquare;
    }

  }
  const hasDraw=gameTurns.length === 9 && !winner;
 
  function handleSelectSquare(rowIndex, colIndex) {
    // setactivePlayer((prvsactiveplayer) =>(prvsactiveplayer === "X" ? "O" : "X"));
    setgameTurn((prvturns) => {
     let currentplayer = derivedActiveplayer(prvturns);
   

      let updatedturn = [
        { square : { row: rowIndex , col: colIndex }, player: currentplayer },
        ...prvturns, 
      ];

      return updatedturn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
          {(winner || hasDraw)&& <Gameover  winner={winner} /> }
        <GameBoard
         onSelectSquare={handleSelectSquare}
         board={gameboard} 
         
         />
      </div>
      <Log turns={gameTurns } />
    </main> 
  );
}

export default App
