import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );
    this.setState(
        pState =>({
            count: pState.count +1
        })
    )
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>increment</button>
      </div>
    );
  }
}

export default Counter;
