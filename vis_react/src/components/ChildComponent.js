import React from 'react'

function ChildComponent(props) {
  return (
    //   <div><button onClick={this.props.greethandler}>greet parent</button></div>
    <div><button onClick={()=> props.greethandler('child')}>greet parent</button></div>
  )
}

export default ChildComponent