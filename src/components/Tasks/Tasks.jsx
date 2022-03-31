import React from 'react'
import { FaWindowClose } from "react-icons/fa";
import "./Tasks.css";
import { useState } from 'react';

function Tasks({taskData, deleteTask, index}) {
   
const [style, setStyle] = useState(true);

// console.log(style);




    return (
    <div className={`task-item ${style ? "" : "done" }`} onClick={()=> setStyle(!style)} >
            <div>
                <h4>{index+1}) {taskData.task} </h4>
                <p>{taskData.date}</p>
            </div>
            <span onClick={() =>deleteTask(taskData.id) }><FaWindowClose/></span>
    </div>
    
    )
}

export default Tasks
         