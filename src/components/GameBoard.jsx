import React from 'react'
// import { useState } from 'react';
const intialGameboard=[
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

function GameBoard( {onSelectSquare,turns}) {
  let gameboard=intialGameboard;

  for (const rowitem of turns) {
     const {square,player}=rowitem;
     const {row,col}=square;
     gameboard[row][col]=player;
  }

//     const [gameboard, setgameboard] = useState(intialGameboard);

// function handleSelectSquare(rowIndex,colIndex){
//     setgameboard((prvsgameboard)=>{
//         const updatedgameboard=[...prvsgameboard.map(indexrow=>[...indexrow])]
//         updatedgameboard[rowIndex][colIndex]=activePlayer;
       
//        console.log(updatedgameboard[rowIndex][colIndex]);
//        return updatedgameboard;
    
//     })
//     onSelectSquare();
    

// }
  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playersymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex,colIndex)} >{playersymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard
