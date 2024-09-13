import { useState } from "react"
import TaskInput from "./TaskInput"
import TaskList from "./TaskList"
export default function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const editTask = (id) =>{}
    return (
        <>
            <h1>Список дел</h1>
            <TaskInput addTask={addTask} /> 
           
            <TaskList taskList={tasks} deleteTask={deleteTask} 
        />
        </>
    );
}
