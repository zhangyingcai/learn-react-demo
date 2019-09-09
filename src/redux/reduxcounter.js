import React from 'react'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import { Counter } from './counter'

// init
const initState = { count: 0 }

// 这是一个 reducer 
const counter = (state = initState, action) => {
    switch (action.type) {
        case 'PLUS_ONE':
            return { count: state.count + 1 }
        case 'Minus_ONE':
            return { count:　state.count - 1 }
        default: break;
    }
    return state;
}

const store = createStore(counter)

// 注册需要 dispatch 的方法 ，这是一种生产 action 对象的方法
function plusOne() {
    return {
        type: 'PLUS_ONE'
    }
}

function minusOne() {
    return {
        type: 'Minus_ONE'
    }
}

const mapStateToProps = state => {
    return { count: state.count }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ plusOne, minusOne }, dispatch)
}

const ConnectCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)


export class ReduxCounter extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <ConnectCounter></ConnectCounter>
            </Provider>
        )
    }
}