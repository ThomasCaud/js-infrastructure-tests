import React, { Component } from 'react';
import { pow } from '../utils/Operationsjs';

class Pow extends Component {
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
      <div className="operation">
        <h1>Test with .jsx file - Pow</h1>
          <form>
              <input type="number" value={this.state.numberA} onChange={this.handleChangeA} id='a' />
              ^
              <input type="number" value={this.state.numberB} onChange={this.handleChangeB} />
              =
              {pow(this.state.numberA, this.state.numberB)}
          </form>
      </div>
    );
  }
}

export default Pow;
