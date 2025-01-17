
const TwoButtons = ({selected,handleDisplay}) => {

    return (
        <div className="space-x-2">
            <button  onClick={() => handleDisplay(selected )} className="btn  bg-blue-400">Available</button>
            <button className="btn">Selected</button>
        </div>
    );
};

export default TwoButtons;