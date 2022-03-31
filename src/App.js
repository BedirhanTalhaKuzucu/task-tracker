import './App.css';
import AddTask from './components/AddTask/AddTask';
import Header from "./components/Header/Header";
import { useState } from 'react';
import Tasks from './components/Tasks/Tasks';

function App() {
  const [displayInput, setdisplayInput] = useState(true);
  const [input, setinput] = useState([
    {id: 1, task:"read book", date: "17:00"}, 
    {id:2 ,task:"watch tv", date: "19:00"},
  ]);

  
  const openCloseInput = () => setdisplayInput(!displayInput);
  const updateInput = (newinput) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const addNewTask = { id, ...newinput };
    setinput([ addNewTask, ...input]);
  }

  const deleteTask = (taskId) => {
    setinput(input.filter((item) => item.id !== taskId));
  }

  const deleteAllTask = () => {
    setinput([])
  }


  
  return (
    <div className="task-tracker">
      <Header openCloseInput={openCloseInput} displayInput= {displayInput}/>
      {displayInput &&  
      <AddTask updateInput={updateInput}  />}
      <div className='tasks'>
        {input.length > 0 ? 
          
          input.map((taskData)=>{
            return (
              <Tasks
              index={input.indexOf(taskData)}
              taskData={taskData}
              deleteTask ={deleteTask}
              key={taskData.id}
              />)}) 
              :
          <h3 style={{ textAlign: "center" }}>NO TASK TO SHOW</h3>
      }
      {input.length > 0 &&  <button className='deletebutton' onClick={deleteAllTask}>DELETE ALL TASK</button> }
     
      </div> 
      
      
    </div>
  );
}

export default App;



