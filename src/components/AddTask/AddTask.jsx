import React from 'react';
import "./AddTask.css";
import { useState } from 'react';

function AddTask({updateInput}) {
 const [dateinfo, setdateinfo] = useState("");
 const [taskinfo, settaskinfo] = useState("");

 const saveTask =() => {
   if (dateinfo ==="" || taskinfo ==="") {
     alert("please enter the exact task and time")
   }else{
    updateInput({task:taskinfo , date:dateinfo,});
    setdateinfo("");
    settaskinfo("");
   }
 }



  return (
    <div className='Add-Task'>
      <form action="" required >

      <div className='task-input'>
        <label htmlFor="task">Task</label>
        <input type="text" id='task' placeholder='AddTask' onChange={e => settaskinfo (e.target.value)} value={taskinfo} required />
      </div>

      <div className='task-input'>
        <label htmlFor="date">Day & Time</label>
        <input type="text" id='date' placeholder='Add Day&Time' onChange={e => setdateinfo (e.target.value)} value={dateinfo} required />
      </div>
      </form>

      <input type="submit" value="Save Task" required className='save-task' onClick={()=>saveTask()}/>
    
     
    </div>
  )
}

export default AddTask



 /*  <button className='save-task' onClick={()=>updateTaskButton()}>
        Save Task
      </button> */