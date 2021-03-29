import React from "react";
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, todo_my_index) => {
                return <TodoItem todo_data={todo} key={todo.id} todo_index={todo_my_index}  />
            }) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList