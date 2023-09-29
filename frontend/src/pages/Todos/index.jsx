import { useEffect, useState, useRef } from "react";

const loader = async () => {
  const response = await fetch("http://localhost:8081/api/todos");
  const todos = await response.json();
  return todos;
};

export function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function init() {
      const todos = await loader();
      setTodos(todos);
    }
    init();
  }, []);

  const taskRef = useRef();

  async function onAddTodoClick() {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: taskRef.current.value,
        isCompleted: false,
      }),
    });
    const todo = await response.json();
    setTodos((todos) => [...todos, todo]);
    if (taskRef.current == null) return;
    taskRef.current.value = "";
  }

  const onDeleteToDoClick = (todoId) => async () => {
    await fetch(`/api/todos/${todoId}`, {
      method: "DELETE",
    });
    console.log(todoId);
    console.log("click");
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  };

  const onIsCompleteChange = (todoId) => async (event) => {
    const isCompleted = event.target.checked;
    const foundTodo = todos.find((todo) => todo.id === todoId);
    await fetch(`/api/todos/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: foundTodo.task,
        isCompleted,
      }),
    });
  }
  

  return (
    <>
      <h2>Todos</h2>
      {todos.map((todo) => {
        console.log(todo.id);
        console.log(todo.isCompleted);
        console.log(todo.task);
        return (
          <li key={todo.id}>
            <input type="checkbox" defaultChecked={todo.isCompleted} onChange={onIsCompleteChange(todo.id)} />
            {todo.task}
            <button onClick={onDeleteToDoClick(todo.id)}>x</button>
          </li>
        );
      })}
      <br />
      <input type="text" ref={taskRef} />
      <button type="button" onClick={onAddTodoClick}>
        Add todo
      </button>
    </>
  );
}
