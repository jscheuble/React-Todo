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

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  clearComplete = e => {
    e.preventDefault();
    const filteredTodos = this.state.todos.filter(todo => {
      return todo.completed === false;
    })
    this.setState({
      todos: filteredTodos
    })
  }

  render() {
    return (
      <div className='todo-list'>
        <h2>To-do List</h2>
        <ToDoList todos={this.state.todos} toggleComplete={this.toggleComplete} clearComplete={this.clearComplete}/>
        <ToDoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
