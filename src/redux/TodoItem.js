// this is a todoitem 
// has two status editing or no
// complete and delete

import React from 'react'

export class TodoItem extends React.Component {
    state = {
        checked: false
    }
    onChangeCheckbox(e) {
        console.log(e)
        this.props.completeTodo()
    }
    render() {
        //
        const { todo, completeTodo, deleteTodo } = this.props
        const { checked } = this.state
        return (
            <li>
                <div className="item">
                    <input type="checkbox" checked={checked} onChange={(e)=>this.onChangeCheckbox(e)} />
                    <label className="todo-item-label">
                        {todo.text}
                    </label>
                    <button className="todo-item-btn" onClick={()=>deleteTodo(todo.id)}>x</button>
                </div>
            </li>
        )
    }
}