import React from 'react';

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    handleChange = e => {
        this.setState({
            todo: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='todo'
                    onChange={this.handleChange}
                    value={this.state.todo}
                />
                <button type='submit'>Add To-Do</button>
            </form>
        )
    }
}

export default ToDoForm;