import React, { useState } from 'react'
import './App.css'
import InputSection from "./component/InputSection";
import Store from './component/StoreTask';


function App() {
  const [input, setInput] = useState("");
  const [Task, setTask] = useState([]);

  function newTask(task) {
    setInput(task)
  }

  function addToTaskArray() {
    if (input.length) {
      setTask([...Task, input])
      setInput("")
    }
  }

  function editTaskName(index) {
    let edit = prompt("Edit Todo")
    let array = [...Task]
    array.splice(index, 1, edit)
    setTask([...array])
  }
  function deleteTask(index) {
    let array = [...Task]
    array.splice(index, 1)
    setTask([...array])
  }

 function updatetime(){
  let current = new Date()
  let curr = current.toUTCString()
  return (curr)
 }
 setInterval(updatetime(), 1000);
 updatetime()
  return (
    <>
    <h4>Date/Time: {updatetime()}</h4>
      <InputSection value={input} change={() => newTask(event.target.value)} btnFunc={addToTaskArray}></InputSection>
      <Store task={
        Task.map((item, index) => {
          return (<li key={index}>{item} <button onClick={() => editTaskName
            (index)}>Edit</button><button onClick={() => deleteTask(index)}>Delete</button></li>)
        })
      } />
    </>
  )
}

export default App