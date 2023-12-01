import React from "react";

const Hello = () => {
// with jsx

  //   return (
  //     <div>
  //       <h1>hello tony</h1>
  //     </div>
  //   );

//   without jsx

  return React.createElement(
    "div",
    { className: "hell", id: "ell" },
    React.createElement('h1',{className:"head", id: "ing"},"heading")
  )
};

export default Hello;
