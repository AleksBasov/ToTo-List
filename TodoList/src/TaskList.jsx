export default function TaskList({ taskList }) {
    const handleCheckboxChange = (index) => {
        
    };

    return (
        <>
            <ul>
                {taskList.map((task, index) => (
                    <li key= {index}> 
                        <input 
                            type='checkbox' 
                            checked={task.compleate} 
                            onChange={() => handleCheckboxChange(index)} 
                        />
                        {task.name}
                        <button>Удалить</button>
                        <button>Изменить</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
