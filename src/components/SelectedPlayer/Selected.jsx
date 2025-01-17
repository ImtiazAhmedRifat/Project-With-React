
const Selected = ({selected}) => {

    // const {name , image, category} = selected;
   
    return (
        <div>
            <h4 className="text-2xl font-bold">Selected Player {selected.length}/6</h4>
            <div>
               <h3>{selected.name}</h3>
            </div>
        </div>
    );
};

export default Selected;