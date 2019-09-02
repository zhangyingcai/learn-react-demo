import React from 'react'
//  一个受控组件
export class TodoInput extends React.Component{
    constructor(props){
        super(props)
    }
    valueOnChange(e){
        this.props.valueOnChange(e.target.value)
    }
    render() {
        const { value } = this.props
        return(
            <form>
                <input type="text" value={value} onChange={e=>this.valueOnChange(e)}/>
                <button type="submit">commit</button>
            </form>
        )
    }
}