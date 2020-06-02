import React, {useState,useEffect} from 'react';

export function UseStateCount(){
    const [count, setCount] = useState(0)
    //useState 返回一对值 当前状态和一个让你更新它的函数
    //不会吧新的 state 和 旧的 state 进行合并
    //useState 唯一的参数就是初始 state ,初始 state 参数只有在第一次渲染时会被用到。
    const [recount, setRecount] = useState({time:1,title:'react'})

    useEffect(()=>{
        // 默认情况下，react会在每次渲染后调用副作用函数 包括第一次渲染的时候
        document.title = `you click ${count} times`
    })
    // useEffect 第二个参数用于性能优化，需要传递一个数组

    return(
        <div>
            <p>you clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>click me</button>
            <p>you clicked {recount.time} times</p>
            <button onClick={()=>setRecount({time:recount.time+1,title:'upadate'})}>click me</button>
        </div>
    )
}