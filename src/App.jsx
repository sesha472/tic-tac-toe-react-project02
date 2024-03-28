import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
   
  const [activePlayer, setactivePlayer] = useState("X");

    function handleSelectSquare(){
      setactivePlayer((prvsactiveplayer)=>prvsactiveplayer=="X" ?"O":"X")
    }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player" >
        <Player name="seshaplayer1" symbol="X" isActive={activePlayer==="X"} />
        <Player name="seshaplayer2" symbol="O"  isActive={activePlayer==="O"}/>

        </ol>
        
        <GameBoard onSelectSquare={handleSelectSquare} activePlayer={activePlayer} />

      </div>
    </main>
  )
}

export default App
