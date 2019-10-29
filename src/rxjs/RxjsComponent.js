import React from 'react'
import {Observable, Subject} from 'rxjs'
 
export class RxjsComponent extends React.Component{
    state = {
        count: 0
    }
    btnRx = null
    componentDidMount() {
        const btn = this.refs.btn
        const test = new Subject();
        test.subscribe(value =>  console.log(value))
        this.btnRx = test
    }
    componentWillUnmount() {
        this.btnRx = null
    }
    btnClick = () => {
        this.btnRx.next(1)
    }
    render() {
        const {count} = this.state
        return (
            <div>
                <div>{count}</div>
                <button ref="btn" onClick={this.btnClick}>click</button>
            </div>
        )
    }
}