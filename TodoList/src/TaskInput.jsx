import { useState } from "react";

export default function TaskInput({ addTask }) {
    const [newTask, setNewTask] = useState();

    const handleAddTask = () => {
        if (newTask.trim() !== "") {


            addTask({ name: newTask, compleate: false })
            setNewTask("");
        }

        console.log('Задача добавлена:', newTask);

    };
    const deleteTask = ()=>{}
    
    const editTask = ()=>{}
  

    return (
        <>
            <input
                type="text"
                placeholder="Введите задачу"
                value={newTask}
                className="in"
                onChange={(e) => {
                    setNewTask(e.target.value);
                }}
            />
            <button onClick={handleAddTask} className="btn">Добавить задачу</button>
        </>
    );
}




