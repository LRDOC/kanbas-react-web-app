import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({todo,}: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">
            <span className="me-5">{todo.title}</span>
            <button
                className="btn btn-primary me-2"
                onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click"
            >
                Edit
            </button>
            <button
                className="btn btn-danger me-2"
                onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"
            >
                Delete
            </button>
        </li>
    );
}