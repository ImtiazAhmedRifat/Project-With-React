import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
const Players = ({handleSelectedPlayer}) => {
  const [players, setPlayers] = useState([]);

  useEffect(()=>{
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }



    ,[])
  return (

  
    <div>

      <h4 className="text-2xl font-bold">Available Player</h4>
      
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
   
   {
     players.map(player=><Player key={player.id} handleSelectedPlayer={handleSelectedPlayer} player={player}></Player>)
   }
 </div>
    </div>


  );
};

export default Players;