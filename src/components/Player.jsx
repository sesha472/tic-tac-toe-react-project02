import React, { useState } from 'react'

function Player({name,symbol}) {
    const [isEditing, setisEditing] = useState(false);
    const [userinput, setuserinput] = useState("");
    const [newusername, setnewusername] = useState(name)
   
     function usernameHandler() {
        setnewusername(userinput)
        setuserinput("")
    }
  return (
    <li>
            <span className="player">
             {isEditing ?<input type='text' onChange={(e)=>setuserinput(e.target.value)}/>:<span className="player-name"> {newusername} </span> }
           
            <span className="player-symbol">{symbol}</span>
            </span>
          {userinput? <button onClick={usernameHandler}>save</button>: <button onClick={()=>setisEditing(!isEditing)}>Edit</button>}

          
          </li>
  )
}

export default Player
