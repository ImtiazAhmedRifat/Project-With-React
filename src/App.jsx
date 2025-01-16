import './App.css'
import Option from './components/Option/Option'
import Header from './components/Header'
import Players from './components/Players/Players'

function App() {


  return (
    <>


      <Header></Header>

       
      <div className='flex justify-between mt-8'>
        <Players></Players>
        <Option></Option>
      </div>

    </>
  )
}

export default App
