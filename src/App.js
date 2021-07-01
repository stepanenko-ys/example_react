import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import myContext from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Купить Хлеб'},
        {id: 2, completed: false, title: 'Купить Масло'},
        {id: 3, completed: false, title: 'Купить Сыр'},
    ])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=25')
            .then(response => response.json())
            .then(todos => {
                set
                setTodos(todos)
            }
            )
    }, [])

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

    function addTodo(title) {
       setTodos(todos.concat([   // Для изменения Стейта вызываем метод "setTodos" куда передаем массив "todos" и для того - что-бы добавит новый элемент - вызываем метод "concat"
           {                     // в него передаем массив {} c одним объектом, который в последствие добавиться к массиву "todos" и потом это все возвращает новый массив который изменит Стейт
               title,            // Поле "title" совпадает со значением "title" (типа: title: title)
               id: Date.now(),
               completed: false
           }
       ]))
    }

    return (
        <myContext.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <h1>React Tutorial</h1>

                <AddTodo myOnCreate={addTodo} />

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
