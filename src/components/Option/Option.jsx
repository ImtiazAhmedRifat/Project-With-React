
const Option = () => {
    return (
        <div className="flex justify-between items-center my-4 gap-4  p-2 border-gray-300 rounded-xl">
          <div>
            <h4 className="text-2xl font-bold">Available Player</h4>
            <h4 className="hidden">Selected Player</h4>
          </div>
          <div className="space-x-2 border border-gray-200 p-2 rounded-xl">
          <button className="btn">Available</button>
          <button>Selected</button>
          </div>
        </div>
    );
};

export default Option;