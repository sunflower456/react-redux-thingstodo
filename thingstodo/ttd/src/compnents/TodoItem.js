import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {
    handleToggle = () => {
        this.props.onToggle(this.props.id);
    }
    handleRemove = (e) => {
        e.stopPropagation();
        this.props.onRemove(this.props.id);
    }
    render() {
        const {checked, text} = this.props;
        return (
            
            <div className="todo-item" onClick={this.handleToggle}>
                <div className="remove" onClick={this.handleRemove}>
                    &times;
                </div>
                <div className={`todo-text ${ checked ? ' checked' : '' }`}>
                    <div>{text}</div>
                </div>
                <div>
                    {
                        checked && (<div className="check-mark">✓</div>)
                    }
                </div>
            </div>
        );
    }
}

export default TodoItem;