import React from 'react'
import { useState } from 'react';
const intialGameboard=[
    [null,null,null],
    [null,null,null],
    [null,null,null],
]




function GameBoard() {

    const [gameboard, setgameboard] = useState(intialGameboard);
    const [playersymbol, setplayersymbol] = useState(true)

function handleSelectSquare(rowIndex,colIndex){
    setgameboard((prvsgameboard)=>{
        const updatedgameboard=[...prvsgameboard.map(indexrow=>[...indexrow])]
        {playersymbol ? updatedgameboard[rowIndex][colIndex]="X" :updatedgameboard[rowIndex][colIndex]="y"}
       
       console.log(updatedgameboard[rowIndex][colIndex]);
       setplayersymbol(!playersymbol)
       return updatedgameboard;
    
    })

    

}
  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleSelectSquare(rowIndex,colIndex)} >{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard
