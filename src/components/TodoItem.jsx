import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      {alert ? (
        <div className="alert alert-danger" role="alert">
          Input is required!
        </div>
      ) : (
        ""
      )}
      <div className="row w-100 align-items-center m-0 mb-2">
        <div className="col text-left">
          {editable ? (
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              value={name}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={() => {
            if (name !== "") {
              dispatch(
                updateTodo({
                  ...todo,
                  name: name,
                })
              );
              setAlert(false);
            } else {
              setAlert(true);
            }
            if (editable) {
              setName(todo.name);
            }
            setEditable(!editable);
          }}
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          type="button"
          className="btn btn-danger m-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
