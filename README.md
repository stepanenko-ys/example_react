***

# React App

https://youtu.be/xJZa2_aldDs

https://vladilen.ru/react?utm_source=youtube&utm_medium=social&utm_campaign=wfmreact&utm_content=video

<br>

***

### Все разделы:

<a href="#Первым делом">1. Первым делом</a><br>
<a href="#Структура проекта">2. Структура проекта</a><br>
<a href="#Команды">3. Команды</a><br>
<a href="#Дополнительная информация">4. Дополнительная информация</a><br>
<a href="#Создание проекта">5. Создание проекта</a><br>
<a href="#Создание компонента ul">6. Создание компонента ul</a><br>
<a href="#Создание компонента li">7. Создание компонента li</a><br>
<a href="#Добавление стилей">8. Добавление стилей</a><br>
<a href="#Передача параметров">9. Передача параметров в компонент</a><br>
<a href="#Прием параметров">10. Прием параметров в компонент</a><br>
<a href="#Вывод индекса">11. Вывод индекса</a><br>
<a href="#Prop-Types">12. Prop-Types</a><br>
<a href="#События">13. События</a><br>
<a href="#Стейт">14. Стейт</a><br>
<a href="#Динамические css классы">15. Динамические css классы</a><br>
<a href="#React context / useContext">16. React context / useContext</a><br>
<a href="#Условные операторы в JSX">17. Условные операторы в JSX</a><br>
<a href="#Формы">18. Формы</a><br>

<br><br>

***

<a id="Первым делом"></a>

### 1. Первым делом:

В начале нужно убедиться что уже установлена Программа NodeJs и стоит утилита "npx"

```bash
npx -v
```
Пример ответа: 6.14.8

<br><br>

***

<a id="Структура проекта"></a>

### 2. Структура проекта

<br>

> Папка "public" - Содержит ???
> ```
> index.html	 - Главный файл который запускает все приложение. Самый главный в нем <div id="root"></div>
> manifest.json	 - Для ПВАшки ???
> ```

<br>

> Папка "src" - Содержит весь наш код
> ```
> index.js	 - Все приложение запускается именно с этого файла
> App.js	         - Здесь первый код ???
> ```

<br>

> Файл "package.json"	- инструкция для всего пакета и приложения

<br><br>

***

<a id="Команды"></a>

### 3. Команды

*  `npm start` - **Запуск приложения**
*  `npm build` - **Собрать приложение в Продакшин моде**
*  `npm ls react` - **Проверка количества и версий установленного реакта**
*  `npm list` - **Проверка всего установленного**

<br><br>

***

<a id="Дополнительная информация"></a>

### 4. Дополнительная информация

<br>

class = className

<br>

1. Во все компоненты обязательно импортировать:<br>
```
import React from "react";`
```

<br>

2. Обязательно что-то экспортируется наружу:<br>
```
export default function TodoList() {
    return (...)
}
```

<br>

3. Обязательно компоненты называть с большой буквы и желательно так-же как называется файл

<br>

4. Разбор конструкции:

```
setTodos(                                                       # Вызов функции
    todos.map(                                                  # Перебираем массив "todos" методом "map" - где
        myTodoItem => {                                         # на каждой итерации принимаем/создаем объект "myTodoItem"
            if (myTodoItem.id === id) {                         # Проверяем, если "myTodoItem.id" равняется тому "id" по которому мы кликнули
                myTodoItem.completed = !myTodoItem.completed    # То тогда его поле "myTodoItem.completed" будет равняться его-же противоположному значению
            }
        return myTodoItem                                       # Возвращаем "myTodoItem"
    })
)
```

<br>

5. Разбор конструкции:

```
setTodos(                                      # Вызов функции
    todos.filter(                              # Перебираем массив "todos" методом "filter" - где
        myTodoItem => myTodoItem.id !== id     # на каждой итерации принимаем/создаем объект "myTodoItem" и дальше сравниваем: Если "myTodoItem.id" не равняется тому "id" которое мы передаем в функцию - 
        )                                      # то мы оставляем элемент в масиве, а если же он совпадает - тогда он удалиться.
    )
```

<br>

6. Разбор конструкции:

```
Тернарный оператор

> {todos.length ? (         # Если в массиве "todos" и в его поле "length" есть что-то отличное от 0
>     <p>Yes TODOS</p>      # Выводим это
> ) : (                     # Если же нет тогда
>     <p>No TODOS</p>       # Выводим это
> )}
```

<br>

7. События на кнопках:

```
# Вариант 0 - НЕ правильный!

# Если так указать "removeTodo(todo_data.id)" - тогда функция будет срабатывать сразу при рендеринге и копка сразу удалиться
 
<button className='rm' onClick={removeTodo(todo_data.id)}>&times;</button>
```

```
# Вариант 1

# Передача колбека в "onClick".
 
<button className='rm' onClick={() => removeTodo(todo_data.id)}>&times;</button>
```

```
# Вариант 2

# Возможно более производительный по памяти. Использование метода "bind".
 
<button className='rm' onClick={removeTodo.bind(null, todo_data.id)}>&times;</button>
```


<br><br>

***

<a id="Создание проекта"></a>

### 5. Создание проекта

```bash
npx create-react-app project_react_1
```

```bash
rm src/App.css src/logo.svg src/App.test.js
```

> nano src/App.js
> ```
> import React from "react";
> 
> function App() {
>     return (
>         <div className='wrapper'>
>             <h1>React Tutorial</h1>
>         </div>
>     );
> }
> 
> export default App;
> ```

```bash
npm start
```

> nano src/index.css
> ```
> .wrapper {
>     padding-top: 5rem;
>     margin: 0 auto;
>     width: 600px;
> }
> ```


<br><br>

***

<a id="Создание компонента ul"></a>

### 6. Создание компонента `<ul>`

<br>

```bash
mkdir src/Todo
```

<br>

> nano src/Todo/TodoList.js
> ```
> import React from "react";
> 
> export default function TodoList() {
>     return (
>         <ul>
>             <li>1</li>
>             <li>2</li>
>         </ul>
>     )
> }
> ```

<br>

> nano src/App.js
> ```
> import TodoList from "./Todo/TodoList";
> 
> ...
> 
> <div className='wrapper'>
>     <h1>React Tutorial</h1>
>     <TodoList />
> </div>
> ```

<br><br>

***

<a id="Создание компонента li"></a>

### 7. Создание компонента `<li>`

> nano src/Todo/TodoItem.js
> ```
> import React from "react";
> 
> export default function TodoItem() {
>     return (
>         <li>TODO</li>
>     )
> }
> ```

> nano src/Todo/TodoList.js
> ```
> <ul>
>     <TodoItem />
>     <TodoItem />
>     <TodoItem />
> </ul>
> ```

<br><br>

***

<a id="Добавление стилей"></a>

### 8. Добавление стилей:

Стили в React описываются в CamelCase, все тире убираются.

<br>

> nano src/Todo/TodoList.js
> ```
> ...
> 
> const styles = {
>     ul: {
>         listStyle: 'none',
>         margin: 0,
>         padding: 0
>     },
>     li: {
>         display: 'flex',
>         justifyContent: 'space-between',
>         alignItems: 'center',
>         padding: '.5rem 1rem',
>         border: '1px solid #ccc',
>         borderRadius: '4px',
>         marginBottom: '.5rem'
>     }
> }
> 
> function TodoList(props) {
>     return (
> 
>         ...
> 
>         <ul style={styles.ul}>
>             <li style={styles.li}>1</li>
>             <li style={styles.li}>2</li>
>         </ul>
> 
>         ...
> 
> ```

<br><br>

***

<a id="Передача параметров"></a>

### 9. Передача параметров в компонент:

<br>

> nano src/App.js
> ```
> ...
> function App() {
>     const todos = [
>         {id: 1, completed: false, title: 'Купить Хлеб'},
>         {id: 2, completed: false, title: 'Купить Масло'},
>         {id: 3, completed: false, title: 'Купить Сыр'},
>     ]
>     return (
> ...
>         <TodoList todos={todos} />
> ...
> ```

<br><br>

***

<a id="Прием параметров"></a>

### 10. Прием параметров в компонент (из предыдущего пункта) и создание Цикла:

<br>

> nano src/Todo/TodoList.js
> ```
> ...
> export default function TodoList(props) {
>     return (
>         <ul style={styles.ul}>
>             {props.todos.map(todo => {
>                 return <TodoItem todo_data={todo} key={todo.id} />
>             }) }
>         </ul>
>     )
> }
> ...
> ```

<br>

> nano src/Todo/TodoItem.js
> ```
> ...
> export default function TodoItem({todo_data}) {
>     return (
>         <li>{todo_data.title}</li>
>     )
> }
> ...
> ```

<br>

У любого массива есть метод ".map()" помогает преобразовать этот массив.

todo => {...} На каждой итерации принимается объект "todo" и в колбек функции формируется HTML

<br>

#### Так можно получать все "props"

> ```
> export default function TodoItem(props) {
>     {console.log('======', props);}
>     {console.log('======', props.todo_data);}
> ```

<br>

#### Так можно получать нужный ключ, если мы знаем название нужного нам входящего параметра  

> ```
> export default function TodoItem({todo_data}) {
>     {console.log('======', todo_data);}
>     {console.log('======', {todo_data});}

<br><br>

***

<a id="Вывод индекса"></a>

### 11. Вывод индекса:

Для каждого из элементов "todo"

<br>

> nano src/Todo/TodoList.js
> ```
> ...
> 
> {props.todos.map((todo, todo_my_index) => {
>     return <TodoItem todo_data={todo} key={todo.id} todo_index={todo_my_index}  />
> }) }
> 
> ...
> ```

<br>

> nano src/Todo/TodoItem.js
> ```
> ...
> export default function TodoItem({todo_data, todo_index}) {
>     return (
>         <li><strong>{todo_index + 1}</strong> - {todo_data.title}</li>
>     )
> }
> 
> ...
> ```

<br><br>

***

<a id="Prop-Types"></a>

### 12. Prop-Types

Так как JS это не типизированный язык — есть потенциальная опасность при передаче свойств.
Для этого рекомендовано использовать описание входящих свойств в нужный компонент.

```bash
npm i prop-types
```

<br>

> nano src/Todo/TodoList.js
> ```
> 
> ...
> import PropTypes from 'prop-types'
> ...
> 
> 
> function TodoList(props) {
> 
>     ...
> 
> }
> 
> TodoList.propTypes = {
>     todos: PropTypes.arrayOf(PropTypes.object).isRequired
> }
> 
> export default TodoList
> ```

<br>

> nano src/Todo/TodoItem.js
> ```
> 
> ...
> import PropTypes from 'prop-types'
> ...
> 
> 
> function TodoItem({todo_data, todo_index}) {
> 
>     ...
> 
> }
> 
> TodoItem.propTypes = {
>     todo_data: PropTypes.object.isRequired,
>     todo_index: PropTypes.number
> }
> 
> export default TodoItem
> ```


<br><br>

***

<a id="События"></a>

### 13. События

События работают через корневой элемент.

Массив "todos" (из файла "App.js") - называется Стейтом.

Невозможно изменить отдельные компоненты в каких-нибудь дочерних элементах. Для того что-бы что-то изменить — необходимо изменить сам Стейт.

> nano src/Todo/TodoItem.js
> ```
> 
> ...
> 
> <input type="checkbox" onChange={() => console.log("HELLO")} />
> 
> ...
> 
> > ```

<br>

Для передачи данного события/значения в родительский элемент нужно добавить еще одну функцию "myChange"

> nano src/Todo/TodoItem.js
> ```
> ...
> 
> function TodoItem({todo_data, todo_index, myChange }) {
> 
> ...
> 
>         <input type="checkbox" style={styles.input} onChange={() => myChange(todo_data.id)} />
> 
> ...
> 
> TodoItem.propTypes = {
>     ...
>     myChange: PropTypes.func.isRequired,
> }
> ```

<br>

> nano src/Todo/TodoList.js
> ```
> ...
> 
> return <TodoItem todo_data={todo} key={todo.id} todo_index={todo_my_index} myChange={props.myToggle}  />
> 
> ...
> 
> TodoList.propTypes = {
>     ...
>     myToggle: PropTypes.func.isRequired,
> }
> ```

<br>

> nano src/Todo/App.js
> ```
> ...
> 
> function App() {
>   let todos = [ ... ]
>
> function toggleTodo(id) {
>     todos = todos.map(todo => {
>         if (todo.id === id) {
>             todo.completed = !todo.completed
>         }
>         return todo
>     })
> }
> 
> ...
> 
>         <TodoList todos={todos} myToggle={toggleTodo} />
> 
> ...
> 
> ```

<br><br>

***

<a id="Стейт"></a>

### 14. Стейт

Создание Стейта, за которым будет следить реакт и Перерендеривать наш шаблон (добавлять динамики приложениям):

> nano src/Todo/App.js
> ```
> const [todos, setTodos] = React.useState([
>     {id: 1, completed: false, title: 'Купить Хлеб'},
>     {id: 2, completed: false, title: 'Купить Масло'},
>     {id: 3, completed: false, title: 'Купить Сыр'},
> ])
> ```

Функция "useState" всегда возвращает Массив из 2-х элементов. 

Первый элемент — это сами данные.

Второй элемент — это функция позволяющая изменять данное состояние для того чтобы реакт видел эти изменения.

<br>

### Функция для изменения Стейта:

> nano src/Todo/App.js
> ```
> function toggleTodo(id) {
>     setTodos(
>         todos.map(myTodoItem => {
>             if (myTodoItem.id === id) {
>                 myTodoItem.completed = !myTodoItem.completed
>             }
>         return myTodoItem
>         })
>     )
> }
> ```

<br><br>

***

<a id="Динамические css классы"></a>

### 15. Динамические css классы

> nano src/index.css
> ```
> ...
> 
> .done {
>     text-decoration: line-through;
> }
> 
> ...
> ```

<br>

> nano src/Todo/TodoItem.js
> ```
> ...
> 
> function TodoItem({todo_data, todo_index, myChange }) {
>     const classes = []
> 
>     if (todo_data.completed) {              # Если "todo_data.completed" == True
>         classes.push('done')
>     }
> 
>     return (
>         <li>
>             <span className={classes.join(' ')}>
>                 <input type="checkbox" checked={todo_data.completed} style={styles.input} onChange={() => myChange(todo_data.id)} />
> 
>                 ...
> 
>             </span>
>         </li>
>     )
> }
> 
> ...
> ```

Конструкция `classes.join(' ')` нужна для того что-бы преобразовать массив в строку и каждый элемент соединить через пробел, на случай если классов(элементов) будет не один.

<br><br>

***

<a id="React context / useContext"></a>

### 16. React context / useContext

> nano src/context.js
> ```
> import React from "react";
> 
> const myContext = React.createContext()
> 
> export default myContext
> ```

<br>

Далее обворачиваем в `<myContext.Provider>` весь наш JSX и создаем функцию `removeTodo`:

> nano src/Todo/App.js
> ```
> ...
> import myContext from "./context";
> 
> function App() {
>     ...
> 
>     function removeTodo(id) {
>         setTodos(todos.filter(myTodoItem => myTodoItem.id !== id))
>     }
> 
>     return (
>         <myContext.Provider value={{ removeTodo }}>
>             <div className="wrapper">
>                 ....
>             </div>
>         </myContext.Provider>
>     );
> }
> 
> ...
> ```

<br>

> nano src/Todo/TodoItem.js
> ```
> ...
> import React, { useContext } from "react";
> import myContext from "./context";
> 
> ...
> 
> function TodoItem({todo_data, todo_index, myChange }) {
>     const { removeTodo } = useContext(myContext)
> 
> ```

<br><br>

***

<a id="Условные операторы в JSX"></a>

### 17. Условные операторы в JSX

> nano src/Todo/App.js
> ```
> ...
> 
>     return (
>        
>         {todos.length ? (
>             <TodoList todos={todos} myToggle={toggleTodo} />
>         ) : (
>             <p>No TODOS</p>
>         )}
> 
> ...
> ```

<br><br>

***

<a id="Формы"></a>

### 18. Формы