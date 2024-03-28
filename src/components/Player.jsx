import React, { useState } from 'react'

function Player({name,symbol,isActive}) {
    const [isEditing, setisEditing] = useState(false);
    const [userinput, setuserinput] = useState("");
    const [newusername, setnewusername] = useState(name)
   
    //  function usernameHandler() {
    //     setnewusername(userinput)
    //     setuserinput("")
    // }
  return (

    <li className={isActive ? "active":undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text"   onChange={(e) => setuserinput(e.target.value)}  />
        ) : (
          <span className="player-name"> {newusername} </span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      {userinput ? (
        <button
          onClick={() => {
            setnewusername(userinput), setuserinput(""),setisEditing(!isEditing);
          }}
        >
          save
        </button>
      ) : (
        <button onClick={() => setisEditing(true)}>Edit</button>
      )}
    </li>
  );
}




export default Player;
