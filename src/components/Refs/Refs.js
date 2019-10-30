import React from 'react'

// function Dialog(){
//     return(<div>
//         <h1>titile</h1>
//         <p>message</p>
//     </div>)
// }

class Test extends React.Component {
    render() {
        return(
            <p>我是一个组件</p>
        )
    }
}

export class RefsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.myDia = React.createRef()
    }
    showMyRef = () => {
        console.log(this.myRef)
        console.log(this.myDia)
    }
    render() {
        console.log(this.props)
        return (<div>
            <p ref={this.myRef}>wo 这里添加了 ref</p>
            {/* <Dialog ref={this.myDia}></Dialog> */}
            <Test ref={this.myDia}></Test>
            <button onClick={this.showMyRef}>show myref</button>
        </div>)
    }   
}