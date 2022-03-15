// used to have to import react
// import React from 'react'

// this is not a constructor
export default function Commment({ content }) {
  // in functional components you just need to return jsx

  // function that is scope to this component
  const add = (x, y) => {
    return x + y
  }
  return (
    // where to props come from? -- come from the function params (args when invoked by react)
    <p>{content} {/*  the math is {add(10, 10)} */}</p>
  )
}



// import React, { Component } from 'react'

// class Comment extends Component {
//     render() {
//         return(<p>{this.props.content}</p>)
//     }
// }

// export default Comment