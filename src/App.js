import './App.css';
import AddTask from './components/AddTask/AddTask';
import Header from "./components/Header/Header";
import { useState } from 'react';
import Tasks from './components/Tasks/Tasks';

function App() {
  const [data, setData] = useState(true);
  const [input, setinput] = useState([{task:"read book", date: "17:00"}, {task:"watch tv", date: "19:00"}]);

  const childToParent = () => setData(!data);
  const updateInput = (newinput) => setinput([...input, newinput]);


  
  return (
    <div className="task-tracker">
      <Header childToParent={childToParent}/>
      {data && 
      <>
      <AddTask updateInput={updateInput}  />
      <div className='tasks'>
        { input.map((taskitem, index )=>{
          return (<Tasks arr={input}  taskInput= {taskitem.task} dateInput= {taskitem.date} key= {index}/>)
        })}
      </div> 
      </>}
      
    </div>
  );
}

export default App;



