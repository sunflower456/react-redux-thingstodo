import React, { Component } from 'react';
import './TodoListTemplate.css';
import Form from './Form';
import TodoItemList from './TodoItemList';

class TodoListTemplate extends Component {
    render() {
        return (
            <div className="todo-list-template">
                <div className="title">
                    오늘 할 일
                </div>
                <section className="from-wrapper">
                    <Form 
                        value={this.props.input}
                        onKeyPress={this.props.onKeyPress}
                        onChange={this.props.onChange}
                        onCreate={this.props.onCreate}
                    />
                </section>
                <section className="todos-wrapper">
                    <TodoItemList 
                        onToggle={this.props.onToggle}
                        onRemove={this.props.onRemove}
                        todos={this.props.todos}
                    />
                </section>
            </div>
        );
    }
}

export default TodoListTemplate;