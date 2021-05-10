import React, { Component } from 'react';
import Counter from './components/Counter';
import Button from './components/Button';
import Option from './components/Option';

class App extends Component {
  state = {
    value : 0,
    diff : 1
  }
  
  onChange = (diff) => {
    this.setState({
      diff : diff
    })
  }

  increment = () => {
    const {value} = this.state;
    this.setState({
      value : value + Number(this.state.diff)
    })
  }

  decrement = () => {
    const {value} = this.state;
    this.setState({
      value : value - Number(this.state.diff)
    })
  }
  render() {
    return (
      <div>
        <Counter value={this.state.value}/>
        <Option onChange={this.onChange}/>
        <Button increment={this.increment} decrement={this.decrement}/>
      </div>
    );
  }
}

export default App;
