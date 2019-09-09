import React from 'react'

function Dialog(){
    return(<div>
        <h1>titile</h1>
        <p>message</p>
    </div>)
}

export class RefsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.myDia = React.createRef()
    }
    showMyRef = () => {
        console.log(this.myRef)
        console.log(this.Dialog)
    }
    render() {
        return (<div>
            <p ref={this.myRef}>wo 这里添加了 ref</p>
            <Dialog ref={this.myDia}></Dialog>
            <button onClick={this.showMyRef}>show myref</button>
        </div>)
    }   
}