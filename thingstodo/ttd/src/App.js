import React, { Component } from 'react';
import TodoListTemplate from './compnents/TodoListTemplate';
import * as actions from './actions'
import {connect} from 'react-redux';

class App extends Component {
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.props.handleCreate();
    }
  }

  render() {
    const {handleKeyPress} = this;
    return (
      <div>
        <TodoListTemplate 
          value={this.props.input}
          onKeyPress={handleKeyPress}
          onChange={this.props.handleChange}
          onCreate={this.props.handleCreate}
          onToggle={this.props.handleToggle}
          onRemove={this.props.handleRemove}
          todos={this.props.todos}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    input : state.todo.input,
    todos : state.todo.todos
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    handleCreate : () => {dispatch(actions.create())},
    handleChange : (e) => {dispatch(actions.change(e))},
    handleRemove : (id) => {dispatch(actions.remove(id))},
    handleToggle : (id) => {dispatch(actions.toggle(id))}
  }
}

export default connect(mapStateToProps, mapDispatchProps)(App);
