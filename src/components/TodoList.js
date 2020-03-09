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
            <button className='clear' onClick={props.clearComplete}>
                Clear Completed
            </button>
        </div>
    );
}

export default ToDoList;