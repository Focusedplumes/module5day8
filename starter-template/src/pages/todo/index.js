import { useEffect, useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/api/todo");
      const data = await res.json();
      setTodo(data.todo);
    }
    loadData();
  }, []);

  function addToDo(id) {
    fetch(`/api/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, done: done, notdone: notDone }),
    });
  }

  if (todo.length === 0) {
    return <h1>To Do List</h1>;
  }

  return (
    <>
      <h1>The List</h1>
      <h4>Here is our menu:</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        {menu.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                width: "300px",
                border: "1px solid black",
                borderRadius: "10px",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button onClick={() => addToDo(item.done)}>Done</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
