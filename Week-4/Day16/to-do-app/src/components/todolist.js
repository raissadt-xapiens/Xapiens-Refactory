import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import Todo from './todo';

export default function TodoList() {
    const [todos, setTodos] = useContext(TodoContext);

    //toggleDone
    const toggleDone = (todo) => {
        todos.map(_todo => _todo === todo ? _todo.done = !todo.done : todo)
        setTodos([...todos])
    }
    //delete
    const deleteTodo = (todo) => {
        const _todos = todos.filter(_todo => _todo !== todo)
        setTodos(_todos)
    }
    // const todos = [
    //     {
    //         "id": Date.now(),
    //         "value": "Buy milk",
    //         "done": false
    //     },
    //     {
    //         "id": Date.now() + 1,
    //         "value": "Play with doggy",
    //         "done": false
    //     }
    // ]

    return (
        <div>
            <div className="hero is-dark">
                <div className="hero-body has-text-centered">
                    <p className="title is-1">{todos.length}</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {todos.map(todo => (
                        <Todo key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} />
                    ))}
                </div>
            </section>
        </div>
    )
}