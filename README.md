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

class = className

1. Во все компоненты обязательно импортировать:<br>
```
import React from "react";`
```

2. Обязательно что-то экспортируется наружу:<br>
```
export default function TodoList() {
    return (...)
}
```

3. Обязательно компоненты называть с большой буквы и желательно так-же как называется файл

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

### 13. ХХХ