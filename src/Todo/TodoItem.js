import React from "react";
import PropTypes from 'prop-types'

function TodoItem({todo_data, todo_index}) {
    return (
        <li>
            <strong>{todo_index + 1}</strong>
            &nbsp;-&nbsp;
            {todo_data.title}
        </li>
    )
}

TodoItem.propTypes = {
    todo_data: PropTypes.object.isRequired,
    todo_index: PropTypes.number
}

export default TodoItem