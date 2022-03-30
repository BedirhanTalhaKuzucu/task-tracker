import React from 'react'
import { FaWindowClose } from "react-icons/fa";
import "./Tasks.css";
import { useState } from 'react';

function Tasks({taskInput, dateInput, arr}) {
   
const [display, setDisplay] = useState(true);
const [style, setStyle] = useState(true);

function deleteItem() {
    arr.find((item)=> {
        if (item.task === taskInput & item.date === dateInput) {
            let index =arr.indexOf(item);
            arr.splice(index,1)
        }})
}



const removeTask = () => {
    deleteItem();
    setDisplay(!display)
}

const doneClick = (e) => {
    setStyle(!style)
    if(style === true){
        e.target.parentElement.style.textDecoration = "none"
        e.target.parentElement.style.color = "black"

    }else{
        e.target.parentElement.style.textDecoration = "line-through"
        e.target.parentElement.style.color = "red"   
    }
}


    return (
    display &&
    <div className='task-item' onClick={doneClick}>
            <div>
                <h4>{taskInput} </h4>
                <p>{dateInput}</p>
            </div>
            <span onClick={() => removeTask()}><FaWindowClose/></span>
    </div>
    
    )
}

export default Tasks
         