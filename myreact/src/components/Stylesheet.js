import React from 'react'
import "./mystyle.css"

function Stylesheet(props) {
    let className = props.primary ? "primary" : " "
  return (
    <h1 className= {className}>Stylesheet</h1>
  )
}

export default Stylesheet