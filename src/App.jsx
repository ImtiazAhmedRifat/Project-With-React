import './App.css'
import Option from './components/Option/Option'
import Header from './components/Header'
import Players from './components/Players/Players'
import { useState } from 'react'

function App() {
     
    const [coin, setCoin] = useState(0);
    
    const setClaimCoin = () => {
      setCoin(10000);
    }

  return (
    <>


      <Header coin={coin}  setClaimCoin={setClaimCoin}></Header>

      <Option></Option>

      <Players></Players>
      
   

    </>
  )
}

export default App
