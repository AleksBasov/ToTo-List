/* eslint-disable react/prop-types */
export default function TaskList({ taskList, deleteTask, editTask }) {
    const handleCheckboxChange = (index) => {
        
        console.log(`Checkbox for task at index ${index} changed`);
    };

    

    
    return (
        <>
            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>
                        <input 
                            type='checkbox' 
                            checked={task.complete} 
                            onChange={() => handleCheckboxChange(index)} 
                        />
                        {task.name}
                        <button className="btn" onClick={() => deleteTask(index)}>Удалить</button>
                        <button className="btn" onClick={() => editTask(index)}>Изменить</button>
                    </li>
                ))}
            </ul>
        </>
    );
    
}
