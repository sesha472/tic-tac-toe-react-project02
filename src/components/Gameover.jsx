import React from 'react'

export default function Gameover({winner}) {
  return (
    <div id="game-over">
      <h2>game over</h2>
     {winner&& <p>{winner} won!</p>}
     {!winner && <p>It&apos;s a draw!</p>}
     <p><button >Reamtch !</button></p>
    </div>
  )
}
