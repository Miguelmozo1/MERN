import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  const [list, setList] = useState([])
  
  const updatedList = (newList) => {
    setList((prevList) => (
      [...prevList, newList]
    ))
  }

  const isComplete = (item) => {
    let updateItems = list.map((todo)=>{
      if (todo === item) {
        let newTodo = {...todo};
        newTodo.complete = !newTodo.complete;
        return newTodo;
      }
      else {
        return todo;
      }
    })
    setList(updateItems)
  }

  const removeItem = (item) => {
    const filteredList = list.filter((remove) => {
      return remove.item !== item
    })
    setList(filteredList)
  }

  return (
    <>
      <Form updatedList={updatedList} />
      <Display list={list} isComplete={isComplete} removeItem={removeItem}/>
    </>
  )
}

export default App
