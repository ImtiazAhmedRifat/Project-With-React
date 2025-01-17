
const Header = ({coin, setClaimCoin}) => {


    return (
        <div>
          <nav className="flex justify-between">
            <div>
                <img src="../../assets/logo.png" alt="" />
            </div>
            <div className="flex justify-center items-center gap-4">
              <ul className="list-none flex justify-center items-center gap-4 font-semibold">
              <li>Home</li>
               <li>Pictures</li>
               <li>Teams</li>
               <li>Schedules</li>
              </ul>
               <li className="font-bold list-none">{coin} Coin</li>
            </div>
          </nav>

          <div className="flex flex-col justify-center items-center gap-4 bg-[url('../../assets/bg-shadow.png')] w-full h-96 bg-cover bg-center">
          <img src="../../assets/banner-main.png" alt="" />
          <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p>Beyond Boundaries Beyond Limits</p>
          <button onClick={()=>setClaimCoin()} className=" bg-yellow-300 rounded-xl p-2 border-2 border-black text-black">Claim Free Credit</button>
          </div>
        </div>
    );
};

export default Header;