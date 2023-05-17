import "./App.css";
import TodoList from "./components/TodoList";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "to-do", completed: false },
      { id: "id-2", text: "to-do2", completed: true },
      { id: "id-3", text: "to-do3", completed: true },
      { id: "id-4", text: "to-do4", completed: false },
    ],
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => acc + Number(todo.completed),
      0
    );
    return (
      <>
        <h1> List of items</h1>
        <p>Total number of Todos : {todos.length} </p>
        <p>Number of completed tasks : {completedTodos}</p>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo}></TodoList>
      </>
    );
  }
}

// function App() {
//   return <div className="App">123</div>;
// }

// export default App;
