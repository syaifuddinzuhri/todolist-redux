import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";

function TodoInput() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);

  return (
    <div>
      {alert ? (
        <div className="alert alert-danger" role="alert">
          Input is required!
        </div>
      ) : (
        ""
      )}
      <div className="input-group mb-3">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Add Todo Item"
          value={name}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              if (name !== "") {
                dispatch(
                  addTodo({
                    id: uuid(),
                    name: name,
                  })
                );
                setAlert(false);
              } else {
                setAlert(true);
              }
              setName("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
