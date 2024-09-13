import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

export default function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    
    const deleteTask = (id) => {
        setTasks(tasks.filter((_, index) => index !== id));
    };

    const editTask = (id, newName) => {
        const updatedTasks = tasks.map((task, index) => 
            index === id ? { ...task, name: newName } : task
        );
        setTasks(updatedTasks);
    };
    

    const EditTask = (index) => {
        const currentTask = taskList[index]; // Убедитесь, что используете правильный массив задач
        const newName = prompt("Введите новое название задачи:", currentTask.name);
        if (newName && newName.trim() !== "") {
            editTask(index, newName); // вызываем функцию редактирования
        }
    };
  

    
    

    return (
        <>
            <h1>Список дел</h1>
            <TaskInput addTask={addTask} /> 
            <TaskList taskList={tasks} deleteTask={deleteTask} editTask={editTask} />
        </>
    );
    
}
