
const Subscribe = () => {
    return (
        <div className="my-4 space-y-4 border border-gray-200 rounded-xl p-4">
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="font-bold text-xl">Subscribe to our Newsletter</h1>
                <p>Ger the latest update and news right in your inbox</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <button className="btn bg-red-300">Subscribe</button>
        </div>
    );
};

export default Subscribe;