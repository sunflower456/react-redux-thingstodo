import React, { Component } from 'react';

class Option extends Component {
  onChange = (e) => {
      this.props.onChange(e.target.value);
  }
  render() {
    return (
      <div>
        <input type="number" value={this.props.diff} onChange={this.onChange}></input>
      </div>
    );
  }
}

export default Option;
