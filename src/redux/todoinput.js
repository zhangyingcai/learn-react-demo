import React from 'react'
//  一个受控组件
export class TodoInput extends React.Component {
    valueOnChange = (e) => {
        this.props.onValueChange(e.target.value)
    }
    onVauleSubmit(e) {
        this.props.onValueChange(e.target.value)
    }
    onInputKeyDown = (e) => {
        this.props.onKeyDown(e)
    }
    // 监听键盘 enter 输入
    render() {
        const { value } = this.props
        return (
            <input type="text" placeholder="请输入内容" 
            value={value} 
            onChange={this.valueOnChange} 
            onKeyDown={this.onInputKeyDown}/>
        )
    }
}