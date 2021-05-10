import React, { Component } from 'react';

class Button extends Component {
  increment = (e) => {
      this.props.increment();
  }
  decrement = (e) => {
      this.props.decrement();
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Button;
