import { createContext, useRef, useState } from "react";
export const TaskContext = createContext();

const initialTasks = [
    {
        id: 1,
        text: "Study React Pre-Class Notes",
        day: "Feb 5th at 2:30pm",
        isDone: false
    },
    {
        "id": 2,
        "text": "Feed the Dog",
        "day": "Feb 6th at 1:30pm",
        "isDone": true
    },
    {
        "text": "Wash Car",
        "day": "Feb 10th at 3:00pm",
        "isDone": false,
        "id": 3
    },
    {
        "text": "Clean Room",
        "day": "Feb 7th at 10:00pm",
        "isDone": false,
        "id": 4
    }
];

export const TaskProvider = (props) => {
    
    const [tasks, setTasks] = useState(initialTasks);
    const id = useRef(5);

    const addTask = (task) => {
        setTasks([{...task, id: id.current++}, ...tasks])
    }
    const deleteTask = (index) => {
        setTasks(tasks.filter((item) => !(tasks.indexOf(item) === index) ) )
    }
    const deleteAllTask = () => {
        setTasks([])
    }
    return (
        <TaskContext.Provider value={{ addTask, tasks, deleteTask, deleteAllTask }}>
            {props.children}
        </TaskContext.Provider>
    )
}







