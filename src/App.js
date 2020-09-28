import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App col-lg-8 col-12 p-5 text-left">
      <button
        onClick={refreshPage}
        className="btn btn-sm btn-outline-primary my-4"
      >
        Refresh
      </button>
      <h1 className="mb-4 text-center">Todo List React With Redux </h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
