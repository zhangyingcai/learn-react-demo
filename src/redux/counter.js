import React from 'react'
export class Counter extends React.Component{
    render() {
        const { count, plusOne, minusOne } = this.props
        return (
            <div>
                <button onClick={minusOne}>-</button>
                <span style={{ margin:"0 10px"}}>
                    {count}
                </span>
                <button onClick={plusOne}>+</button>
            </div>
        )
    }
}