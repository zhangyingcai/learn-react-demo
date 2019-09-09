import React from 'react'
//  一个受控组件
export class TodoInput extends React.Component {
    constructor(props) {
        super(props)
    }
    valueOnChange(e) {
        this.props.onValueChange(e.target.value)
    }
    onVauleSubmit(e) {
        console.log(e)
        this.props.onValueChange()
    }
    render() {
        const { value } = this.props
        return (
            <input type="text" placeholder="请输入内容" value={value} onChange={e => this.valueOnChange(e)} onKeyDown={(e)=>this.onVauleSubmit(e)} />
        )
    }
}