import React from 'react'

class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date().toLocaleTimeString(),
            timer: null,
            num: 0
        }
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
        this.timer = setInterval(() => {
            this.click()
        }, 1000);
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate')
    }
    click(){
        this.setState((prevState)=>({
            date: new Date().toLocaleTimeString(),
            num: prevState.num + 1
        }))
    }
    render() {
        return (
            <div>
                {this.state.date}
                <br></br>
                {this.state.num}
            </div>
        )
    }
}

export default Clock