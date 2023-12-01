import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "hello"
      }
    //   this.clickhandler = this.clickhandler.bind(this)  {/*approach 3 */}
    }
    // clickhandler(){
    //     this.setState({
    //         message : "goodbye"
    //     })
    // }
    clickhandler = () => {
        this.setState({
            message:"gooodbye"
        })
    }
  render() {
    return (
      <div><h1>{this.state.message}</h1>
        {/* <button  onClick = {this.clickhandler.bind(this)}>click</button> */}    {/*approach 1 */}
        {/* <button  onClick = {()=>this.clickhandler()}>click</button> */}         {/*approach 2 */}
        {/* <button  onClick = {this.clickhandler}>click</button> */}               {/*approach 3 */}
        <button  onClick = {this.clickhandler}>click</button>    {/*approach 4 */}
      </div>
    );
  }
}

export default EventBind;
