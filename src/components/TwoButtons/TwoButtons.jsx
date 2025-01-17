
const TwoButtons = ({selected,handleDisplay}) => {
    console.log(selected)
    return (
        <div className="space-x-2">
            <button  onClick={() => handleDisplay(selected )} className="btn  bg-blue-400">Available</button>
            <button className="btn">Selected</button>
        </div>
    );
};

export default TwoButtons;