import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggendIn: true,
    };
  }
  render() {
    return this.state.isLoggendIn && <div>welcome tony</div>
    // return this.state.isLoggendIn ? (
    //   <div>welcome tony </div>
    // ) : (
    //   <div>welcome guest</div>
    // );
    //     let message
    //    if(this.state.isLoggendIn){
    //     message = <div>welcome Tony</div>
    //    }
    //    else{
    //     message = <div>welcome guest</div>
    //    }
    //    return <div>{message}</div>
  }
}

export default UserGreeting;
