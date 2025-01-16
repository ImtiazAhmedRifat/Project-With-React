import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(()=>{
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }
    ,[])
  return (
    <div className="w-4/6 grid grid-cols-1 md:grid-cols-3 gap-4">
   
      {
        players.map(player=><Player key={player.id} player={player}></Player>)
      }
    </div>
  );
};

export default Players;