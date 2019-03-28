import React, { Component } from 'react';
import { add } from '../utils/Operations';

class Addition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberA: 0,
      numberB: 0
    };

    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
  }

  handleChangeA(event) {
    this.setState({numberA: event.target.value});
  }

  handleChangeB(event) {
    this.setState({numberB: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Test with .jsx file</h1>
          <form>
              <input type="number" value={this.state.numberA} onChange={this.handleChangeA} />
              +
              <input type="number" value={this.state.numberB} onChange={this.handleChangeB} />
              =
              {add(parseInt(this.state.numberA), parseInt(this.state.numberB))}
          </form>
      </div>
    );
  }
}

export default Addition;
