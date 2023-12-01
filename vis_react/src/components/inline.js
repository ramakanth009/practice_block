import React from 'react'

let k = {
    fontSize : "80px",      //what ever the keyvalue of the css design should be in camelCase
    color:"green",
    fontWeight:"1000"
}
function inline() {
  return (
    <div style = {k} >inline</div>
  )
}

export default inline