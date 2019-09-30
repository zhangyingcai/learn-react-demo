// this is a todoitem 
// has two status editing or no
// complete and delete

import React from 'react'

export class TodoItem extends React.Component {
    onChangeCheckbox(id) {
        this.props.completeTodo(id)
    }
    render() {
        //
        const { todo, completeTodo, deleteTodo, completed } = this.props
        return (
            <li>
                <div className="item">
                    <input type="checkbox" checked={completed} onChange={()=>this.onChangeCheckbox(todo.id)} />
                    <label className="todo-item-label">
                        {todo.text}
                    </label>
                    <button className="todo-item-btn" onClick={()=>deleteTodo(todo.id)}>x</button>
                </div>
            </li>
        )
    }
}