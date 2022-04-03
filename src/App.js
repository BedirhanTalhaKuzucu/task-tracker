import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks/Tasks";
import axios from 'axios';

function App() {
  const [displayInput, setdisplayInput] = useState(true);
  const [input, setinput] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      setinput(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const openCloseInput = () => setdisplayInput(!displayInput);

  const updateInput = async (newinput) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newinput),
    });
    await res.json();
    console.log(res);
    fetchTasks();
  };

  /*  const updateInput = (newinput) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const addNewTask = { id, ...newinput };
    setinput([addNewTask, ...input]);
  }; */

  const deleteTask = async (taskId) => {
    // setinput(input.filter((item) => item.id !== taskId));
    await axios.delete(`http://localhost:5000/tasks/${taskId}`);
    fetchTasks();

  };

  const deleteAllTask = async () => {
    await axios.delete(`http://localhost:5000/`);
    fetchTasks();
    // setinput([]);
  };

  return (
    <div className="task-tracker">
      <Header openCloseInput={openCloseInput} displayInput={displayInput} />
      {displayInput && <AddTask updateInput={updateInput} />}
      <div className="tasks">
        {input.length > 0 ? (
          input.map((taskData) => {
            return (
              <Tasks
                index={input.indexOf(taskData)}
                taskData={taskData}
                deleteTask={deleteTask}
                key={taskData.id}
              />
            );
          })
        ) : (
          <h3 style={{ textAlign: "center" }}>NO TASK TO SHOW</h3>
        )}
        {input.length > 0 && (
          <button className="deletebutton" onClick={deleteAllTask}>
            DELETE ALL TASK
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
