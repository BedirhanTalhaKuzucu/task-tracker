import React from 'react';
import "./AddTask.css";
import { useContext, useState } from 'react';
import { TaskContext } from '../TaskContext/TaskContext';

function AddTask() {
  const [dateinfo, setdateinfo] = useState("");
  const [taskinfo, settaskinfo] = useState("");

  const { addTask } = useContext(TaskContext);

  const saveTask = (e) => {
    e.preventDefault();
    if (dateinfo === "" || taskinfo === "") {
      alert("please enter the exact task and time")
    } else {
      addTask({ text: taskinfo, day: dateinfo, isDone: false });
      setdateinfo("");
      settaskinfo("");
    }
  }
  
  return (
    <div className='Add-Task'>
      <form action="" onSubmit={(e) => saveTask(e)} required >

        <div className='task-input'>
          <label htmlFor="task">Task</label>
          <input type="text" id='task' placeholder='AddTask' onChange={e => settaskinfo(e.target.value)} value={taskinfo} required />
        </div>

        <div className='task-input'>
          <label htmlFor="date">Day & Time</label>
          <input type="text" id='date' placeholder='Add Day&Time' onChange={e => setdateinfo(e.target.value)} value={dateinfo} required />
        </div>

        <input type="submit" value="Save Task" required className='save-task' />

      </form>



    </div>
  )
}

export default AddTask



/*  <button className='save-task' onClick={()=>updateTaskButton()}>
       Save Task
     </button> */