import React from 'react'
import { useState } from 'react';
const intialGameboard=[
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

function GameBoard( {onSelectSquare,activePlayer}) {

    const [gameboard, setgameboard] = useState(intialGameboard);

function handleSelectSquare(rowIndex,colIndex){
    setgameboard((prvsgameboard)=>{
        const updatedgameboard=[...prvsgameboard.map(indexrow=>[...indexrow])]
        updatedgameboard[rowIndex][colIndex]=activePlayer;
       
       console.log(updatedgameboard[rowIndex][colIndex]);
       return updatedgameboard;
    
    })
    onSelectSquare();
    

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
