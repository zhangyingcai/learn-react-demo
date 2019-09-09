// 这里是一个 todolist
import React from 'react'
import { TodoItem } from './TodoItem'
import { TodoInput } from './TodoInput'
import { directive } from '@babel/types';

export class TodoList extends React.Component {
    state = {
        value: '',
        todolist: []
    }
    completeTodo() { }
    deleteTodo() { }
    onValueChange = (value) => {
        this.setState({
            value: value
        })
    }
    render() {
        const { } = this.props
        const { value, todolist } = this.state
        return (
            <div>
                <section>
                    <TodoInput
                        value={value}
                        onValueChange={this.onValueChange}></TodoInput>
                </section>
                <ul>
                    {
                        todolist.map((item, index) => {
                            return (
                                <TodoItem
                                    todo={item}
                                    index={index}
                                    completeTodo={() => this.completeTodo()}
                                    deleteTodo={() => this.completeTodo()}
                                ></TodoItem>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}