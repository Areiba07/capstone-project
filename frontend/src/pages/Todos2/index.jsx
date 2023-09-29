import { useLoaderData, Form, redirect, useFetcher } from "react-router-dom";

export const loader = async () => {
  const response = await fetch("http://localhost:8081/api/todos");
  const todos = await response.json();
  return todos;
};

export const action = async ({ request }) => {
  const formData = await request.formData();

  if (request.method === "PUT") {
    await fetch(`/api/todos/${todoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: formData.get("task"),
          isCompleted: JSON.parse(formData.get("isCompleted")),
        }),
      });
      return redirect("/todos2");
  }

  if (request.method === "DELETE") {
    const todoId = formData.get("id");
    await fetch(`/api/todos/${todoId}`, {
      method: "DELETE",
    });
    return redirect("/todos2");
  }

  await fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task: formData.get("task"),
      isCompleted: false,
    }),
  });
  return redirect("/todos2");
};

export function Todos2() {
  const todos = useLoaderData();
  const updateToDoFetcher = useFetcher();

  const onIsCompleteChange = (todoId) => async (event) => {
    const isCompleted = event.target.checked;
    const foundTodo = todos.find((todo) => todo.id === todoId);
    updateToDoFetcher.submit(
      {
        id: todoId,
        task: foundTodo.task,
        isCompleted,
      },
      {
        method: "PUT",
      }
    );
  };
  return (
    <>
      <h2>Todos</h2>
      {todos.map((todo) => {
        console.log(todo.id);
        console.log(todo.isCompleted);
        console.log(todo.task);
        return (
          <Form key={todo.id} method="DELETE">
            <li>
              <input
                type="checkbox"
                defaultChecked={todo.isCompleted}
                onChange={onIsCompleteChange(todo.id)}
              />
              {todo.task}
              <input type="hidden" name="id" value={todo.id}></input>
              <button type="submit">x</button>
            </li>
          </Form>
        );
      })}
      <br />
      <Form method="POST">
        <input type="text" name="task" />
        <button type="submit">Add todo</button>
      </Form>
    </>
  );
}
