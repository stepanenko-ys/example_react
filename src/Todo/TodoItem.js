import React from "react";
import PropTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo_data, todo_index}) {
    return (
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input} />
                <strong>{todo_index + 1}</strong>
                &nbsp;-&nbsp;
                {todo_data.title}
            </span>

            <button className='rm'>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo_data: PropTypes.object.isRequired,
    todo_index: PropTypes.number
}

export default TodoItem