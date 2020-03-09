import React from 'react';

import Todo from './Todo';

const ToDoList = (props) => {
    return (
        <div className='todo-list'>
            {props.todos.map(todo => (
                <Todo 
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    );
}

export default ToDoList;