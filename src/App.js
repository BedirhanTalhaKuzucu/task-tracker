import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import { useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import { TaskContext } from "./components/TaskContext/TaskContext";
import { useContext } from "react";

function App() {
  const [displayInput, setdisplayInput] = useState(true);
  const { tasks, deleteAllTask } = useContext(TaskContext);

  const openCloseInput = () => setdisplayInput(!displayInput);

  return (
    <div className="task-tracker">
      <Header openCloseInput={openCloseInput} displayInput={displayInput} />
      {displayInput && <AddTask />}
      <div className="tasks">
        {tasks.length > 0 ? (
          tasks.map((taskData) => {
            return (
              <Tasks
                index={tasks.indexOf(taskData)}
                taskData={taskData}
                key={taskData.id}
              />
            );
          })
        ) : (
          <h3 style={{ textAlign: "center" }}>NO TASK TO SHOW</h3>
        )}
        {tasks.length > 0 && (
          <button className="deletebutton" onClick={deleteAllTask}>
            DELETE ALL TASK
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
