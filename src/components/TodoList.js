import React from 'react';

import Todo from './Todo';

const ToDoList = (props) => {
    return (
        <div className='todo-list'>
            {props.todos.map(todo => (
                <Todo 
                    key={todo.id}
                    todo={todo}
                    toggleComplete={props.toggleComplete}
                />
            ))}
        </div>
    );
}

export default ToDoList;