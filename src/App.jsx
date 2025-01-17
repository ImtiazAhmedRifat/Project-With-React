import './App.css'
import Header from './components/Header'
import Players from './components/Players/Players'
import { useState } from 'react'
import Selected from './components/SelectedPlayer/Selected'
import TwoButtons from './components/TwoButtons/TwoButtons'
import Footer from './components/footer/footer'
import Subscribe from './components/subscribe/Subscribe'

function App() {

  const [coin, setCoin] = useState(0);

  const [selected, setSelected] = useState([]);

  const [visible, setVisible] = useState()

  const handleSelectedPlayer = player => {
    const selectedPlayer = [...selected, player];

    selectedPlayer.find(() => {
      setSelected(selectedPlayer);
    })

   
  }

  const setClaimCoin = () => {
    const updatedCoin = coin + 10000;
    setCoin(updatedCoin);
  }
  
  const handleDisplay = visible => {
   setVisible(visible)
  }
  

  return (
    <>


      <Header coin={coin} setClaimCoin={setClaimCoin}></Header>

      <div className='my-4'>

      <TwoButtons visible={visible} handleDisplay={handleDisplay} selected={selected}></TwoButtons>

        <div className='my-4'>

          <Selected selected={selected}></Selected>

          <Players handleSelectedPlayer={handleSelectedPlayer}></Players>


        </div>
        
      </div>
      <Subscribe></Subscribe>
  <Footer></Footer>
    </>
  )
}

export default App
