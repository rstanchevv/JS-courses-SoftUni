import Body from './components/Body'
import Footer from './components/Footer'
import Table from './components/Table'
import './App.css'

const numbers = [16,14,10]

function App() {

  return (
    <div>
      <Body/>
      <Footer/>
      <Table text={numbers}/>
    </div>
  )
}

export default App
