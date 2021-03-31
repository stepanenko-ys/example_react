import React from "react";
import TodoList from "./Todo/TodoList";
import myContext from "./context";

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Купить Хлеб'},
        {id: 2, completed: false, title: 'Купить Масло'},
        {id: 3, completed: false, title: 'Купить Сыр'},
    ])

    function toggleTodo(id) {
        setTodos(
            todos.map(myTodoItem => {
                if (myTodoItem.id === id) {
                    myTodoItem.completed = !myTodoItem.completed
                }
            return myTodoItem
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(myTodoItem => myTodoItem.id !== id))
    }

    return (
        <myContext.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <h1>React Tutorial</h1>

                {todos.length ? (
                    <TodoList todos={todos} myToggle={toggleTodo} />
                ) : (
                    <p>No TODOS</p>
                )}

            </div>
        </myContext.Provider>
    );
}

export default App;
