import './App.css'
import { useState } from 'react'
import Form from './components/Form'
import Display from './components/Display'


function App() {
  const [squareList, setSquareList] = useState([])

  return (
    <>
      <div>
        <Form squareList={squareList} setSquareList={setSquareList} />
      </div>
      <div>
        <Display squareList={squareList} />
      </div>
    </>
  )
}

export default App
