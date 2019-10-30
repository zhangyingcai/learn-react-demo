import React from 'react'

class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date().toLocaleTimeString(),
            num: 0
        }
        this.timer = null
    }
    // The below lifecycles should be removed
    // componentWillMount(){
    //     console.log('componentWillMount')
    // }
    componentDidMount(){
        console.log('componentDidMount')
        // this.timer = setInterval(() => {
        //     this.click()
        // }, 1000);
    }
    // The below lifecycles should be removed
    // componentWillUpdate(){
    //     console.log('componentWillUpdate')
    // }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
        if (this.timer) {
            this.clearTimer()
        }
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate')
        return null // a snapshot value or null must be return 
    }
    click(){
        this.setState((prevState)=>({
            date: new Date().toLocaleTimeString(),
            num: prevState.num + 1
        }))
    }
    clickStart = ()=>{
        if (this.timer) return
        this.timer = setInterval(() => {
            this.click()
        }, 1000);
    }
    clickStop = ()=>{
        if (!this.timer) return
        this.clearTimer()
    }
    clearTimer() {
        clearInterval(this.timer)
        this.timer = null
    }
    render() {
        return (
            <div>
                {this.state.date}
                <br></br>
                {this.state.num}
                <div>
                    <button onClick={this.clickStart}>start</button><br/>
                    <button onClick={this.clickStop}>stop</button><br/>
                </div>
            </div>
        )
    }
}

export default Clock