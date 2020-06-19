import React, { useReducer } from 'react'

const UseReducerCount = ()=>{
    const countReducer = function(state, action){
        switch(action.type){
            case 'increment': 
            return {count: state.count + 1};
            case 'decrement': 
            return {count: state.count - 1};
            default: 
            return {count: state.count};
        }
    }
    const [state, dispatch] = useReducer(countReducer, {count:0})
    const {count} = state
    return(
        <div>
            <button onClick={()=>dispatch({type:'decrement'})}>-</button>
            <span>{count}</span>
            <button onClick={()=>dispatch({type:'increment'})}>+</button>
        </div>
    )
}

export { UseReducerCount }