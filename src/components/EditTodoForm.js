import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      alert("Введите текст!!!");
    } else editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Обновить задачу..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Обновить Задание
      </button>
    </form>
  );
};
