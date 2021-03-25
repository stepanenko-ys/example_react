import React from "react";

export default function TodoItem({todo_data, todo_index}) {
    return (
        <li><strong>{todo_index + 1}</strong> - {todo_data.title}</li>
    )
}