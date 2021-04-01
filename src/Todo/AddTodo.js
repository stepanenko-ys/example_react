import React, {useState} from "react";
import PropTypes from 'prop-types'


// Вариант № 2
function useInputValue(myDefaultValue = '') {
    const [value, setValue] = useState(myDefaultValue)
    return {
        bind: {
            value,                                          // Или аналог - value: value
            onChange: event => setValue(event.target.value) // Функция "onChange" которая принимает "event" - который будет обращаться к "setValue" и задавать ему значение "event.target.value"
        },
        myClear: () => setValue(''),                  // Создаем функцию "myClear" которая обращается к функции setValue и задает ему пустую строчку
        value: () => value                                  // Создаем функцию "value" с помощью которой будем просто получать значения "value"
    }
}
// End - Вариант № 2


function AddTodo({ myOnCreate }) {

    // Вариант № 1
    // const [value, setValue] = useState('')

    // function submitHandler (event) {
    //     event.preventDefault()
    //
    //     if (value.trim()) {      // Проверка - Если в "input" что-то заполнено
    //         myOnCreate(value)    // Тогда обращаемся в свойство "onCreate" и передаем ему значение "value"
    //         setValue('')   // Очищаем поле Input после выполнения
    //     }
    // }
    // End - Вариант № 1



    // Вариант № 2
    const input = useInputValue('') // Это наш собственны Хук

    function submitHandler (event) {
        event.preventDefault()

        if (input.value().trim()) {
            myOnCreate(input.value())
            input.myClear()                     // Для очистки "input" - Обращаемся к объекту input и вызываем у него метод Clear
        }
    }
    // End - Вариант № 2


    return (
        <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>


            {/* // Вариант № 1 */}
            {/*<input type='text' style={{ marginRight: '1rem' }} value={value} onChange={event => setValue(event.target.value)} />*/}

            {/* // Вариант № 2 */}
            <input {...input.bind} />        {/* // Использование итератора Spread. Он сам поместить в этот Input занчение "value" и "onChange" */}


            <button type='submit'>Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    myOnCreate: PropTypes.func.isRequired
}

export default AddTodo