// 这里是一个 todolist
import React from 'react'
import { TodoItem } from './TodoItem'
import { TodoInput } from './TodoInput'

export class TodoList extends React.Component {
    state = {
        value: '',
        todolist: [{id:1, text:'123', completed: true}]
    }
    completeTodo = (id) => {
        const {todolist} = this.state
        todolist.forEach(element => {
            if (element.id === id) {
                element.completed = !element.completed
            }
        });
        this.setState({
            todolist
        })
     }
    deleteTodo = (id) => { 
        const {todolist} = this.state
        const newList = todolist.filter((item) => { 
            return item.id !== id
        })
        this.setState({
            todolist: newList
        })
    }
    onValueChange = (value) => {
        this.setState({
            value: value
        })
    }
    onToDoInputKeyDown = (e)=>{
        console.log(e.keyCode)
        const {value} = this.state
        switch (e.keyCode) {
            case 13:
                value && this.addToDo(value)
                break;
        
            default:
                break;
        }
    }
    addToDo(text) {
        const {todolist} = this.state
        todolist.push({id: todolist.length + 1, text: text, completed: false})
        this.setState({
            todolist: todolist
        })
    }
    render() {
        const { value, todolist } = this.state
        return (
            <div>
                <section>
                    <TodoInput
                        value={value}
                        onValueChange={this.onValueChange}
                        onKeyDown={this.onToDoInputKeyDown}></TodoInput>
                </section>
                <ul>
                    {
                        todolist.map((item, index) => {
                            return (
                                <TodoItem
                                    todo={item}
                                    index={index}
                                    completed={item.completed}
                                    completeTodo={this.completeTodo}
                                    deleteTodo={this.deleteTodo}
                                ></TodoItem>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}