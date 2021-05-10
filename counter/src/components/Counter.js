import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        Value : {this.props.value}
      </div>
    );
  }
}

export default Counter;
