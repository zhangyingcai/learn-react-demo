// this is a todoitem 
// has two status editing or no
// complete and delete

import React from 'react'

export class TodoItem extends React.Component {
    onChangeCheckbox = () => {
        const { todo } = this.props
        this.props.completeTodo(todo.id)
    }
    onDeleteToDo = () => {
        const { todo } = this.props
        this.props.deleteTodo(todo.id)
    }
    render() {
        //
        const { todo, completed } = this.props
        return (
            <li>
                <div className="item">
                    <input type="checkbox" checked={completed} onChange={this.onChangeCheckbox} />
                    <label className="todo-item-label">
                        {todo.text}
                    </label>
                    <button className="todo-item-btn" onClick={this.onDeleteToDo}>x</button>
                </div>
            </li>
        )
    }
}