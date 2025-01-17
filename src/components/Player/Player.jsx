
const Player = ({player, handleSelectedPlayer}) => {
            const {price,name,image,category,country_name} = player;
    return (
        <div className="">
           <div className="space-y-3 border border-gray-200 rounded-xl p-4
           ">
           <img className="w-96 rounded-xl" src={image} alt="" />
           <h3>{name}</h3>
           <div className="flex justify-between">
            <p >Country: {country_name}</p>
            <p>{category}</p>
           </div>
           <hr />
           <p className="font-semibold">Rating</p>
           <div className="grid grid-cols-2 justify-center items-center gap-2">
            <p className="font-semibold">Right Handed Batsman</p>
            <p className="text-gray-400 font-semibold">Right Handed Batsman</p>
             <p className="font-bold">Price: ${price}</p>
             <button onClick={() => handleSelectedPlayer(player)} className="btn p-2 text-xl font-semibold rounded-xl border border-gray-300">Choose Player</button>

           </div>
           </div>
        </div>
    );
};

export default Player;