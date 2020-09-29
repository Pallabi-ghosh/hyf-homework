import React from "react";
import "./App.css";

// Todo List

/* Get out of bed, Wed Sep 13 2017
 * Brush teeth, Thu Sep 14 2017
 * Eat breakfast, Fri Sep 15 2017*/

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.task},{todo.deadline}
    </div>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      task: "Get out of bed",
      deadline: " Wed Sep 13 2017",
    },
    {
      task: "Brush teeth",
      deadline: " Thu Sep 14 2017",
    },
    {
      task: "Eat brakefast",
      deadline: " Fri Sep 15 2017",
    },
    {
      task: "read Ten Years A Nomad",
      deadline: " Wed Nov 13 2017",
    },
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
