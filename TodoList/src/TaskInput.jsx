import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function TaskInput({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim()) {
      addTask({ name: taskName, complete: false });
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={handleInputChange}
        placeholder="Введите задачу"
        className="in"
      />
      <button type="submit" className="btn">Добавить</button>
    </form>
  );
}
