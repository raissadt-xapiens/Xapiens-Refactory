import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';

export default function Navbar() {
  const [todos, setTodos] = useContext(TodoContext);
  const [menu, setMenu] = useState(false);
  const [value, setValue] = useState(""); //new

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, {
      "id": Date.now(),
      "value": value, //value
      "done": false
    }])
    setValue(""); //clear value after submit
  }

  return (
    <div className="navbar has-shadow">
      <div className="navbar-brand">
        <div className="navbar-item">
          <p className="title">To-Do List</p>
        </div>

        <a role="button" onClick={() => setMenu(!menu)} className={`navbar-burger burger ${menu ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${menu ? "is-active" : ""}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field has-addons">
              <form onSubmit={addTodo} className="field has-addons">
                <p className="control is-expanded">
                  <input value={value} type="text" onChange={(e) => setValue(e.target.value)} className="input" />
                </p>
                <p className="control">
                  <button className="button is-dark has-text-weight-bold">
                    Create New
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}