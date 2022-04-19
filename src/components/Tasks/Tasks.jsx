import React from 'react'
import { FaWindowClose } from "react-icons/fa";
import "./Tasks.css";
import { useState } from 'react';
import { TaskContext } from '../TaskContext/TaskContext';
import { useContext } from 'react';


function Tasks({ taskData, index }) {
    const [style, setStyle] = useState(true);
    const { deleteTask } = useContext(TaskContext);


    return (
        <div className={`task-item ${style ? "" : "done"}`} onClick={() => setStyle(!style)} >
            <div>
                <h4>{index + 1}) {taskData.text} </h4>
                <p>{taskData.day}</p>
            </div>
            <span onClick={() => deleteTask(index)}><FaWindowClose /></span>
        </div>
    )
}

export default Tasks
