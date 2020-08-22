import React from 'react'

//Two Methods of creating a component

// 1. Stateless componenet

// function HelloWorld(props) {
//     return(
//     <h1>hello wrld name!  {props.name}</h1>
//     )
// }
// export default HelloWorld;

// 2. Class based

class HelloWorld extends React.Component{
    render(){
        return(
            <h1> Hello  wrld name!  {this.props.name}</h1>
        )
    }
}

export default HelloWorld;