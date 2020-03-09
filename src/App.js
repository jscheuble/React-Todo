import React from 'react';

import './components/Todo.css';
import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';

const todos = [
  {
    task: 'Brush Dog',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Water Plants',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  addTodo = name => {
    const todo = {
      task: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  render() {
    return (
      <div>
        <h2>To-do List</h2>
        <ToDoList todos={this.state.todos}/>
        <ToDoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
