redux 学习

# 为什么需要redux

方便不同组件之间在状态管理，使用组件传递的话，
状态管理工具，可以单独运行。

# 三个特性

每次更新都产生一个新的redux

# 创建 store 

create store

需要实现一个reducer方法

有两个参数 state， action

默认需要初始化 state

action 当前操作的描述，描述一个行为的数据结构, action create  是一个生产  action 对象的地方 可以同 action create 直接调用。
通过 reducer 进行数据更新。

描述更新 state 的操作？

工作流程？

(state, action) => new state

单项数据流，可追踪

多个 reducer 使用

combineReducers  可以接收多个 reducer 作为参数

## 数据部分 state

state 有三个方法

getState() 获取当前数据
dispatch(action) dispatch 给 reducer
subscribe(listenter) 监听 store 的变化

###　创建　state

const = createStore(reducer)

## sh

##  react 中使用

# bindActionCreators

```
funcion bindActionCreateors(actionCreator, dispatch){
    return function(){
        return dispatch(actionCreator.apply(this, arguments))
    }
}
```

# provider

react-redux 提供的一个组件，能够把 state 提供给其子组件。

# connect

connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

把 “指定的 state & 指定的 action ” 和 React 组件链接起来 ==》 容器组件

## mapStateToProps

> mapStateToProps(state, [ownProps]) => {}

callback: object

> 作用， 将指定的 state 作为 props 注入到 UI 组件中

返回的 object 就是要注入到 UI 组件数据结构, 可以根据需要动态生成属性。

## mapDispatchToProps

可以是一个 function 或者 object

> 把指定的 action 注入到 UI 组件当中

## mergeProps

是一个 funtion 用来筛选哪些参数传递给组件。

const defaultMergeProps = (stateProps, dispatchProps, ownProps)


## bindActionCreators
Zhangyingcai#123