react 组件学习

推荐使用组件组合的形式来实现组件之间的重用。

# 包含关系

官方举得栗子是  sideBar 和 Dialog 两种应用场景，在展现 通用组件内容 box

官方建议通过 props 将子组件 实现组件的传递

示例是 将 内容通过 props.children 来进行传递到目标组件中，可以自己在 props 属性上自定义需要接受的 组件，并实现相应的 视图 处理

children (react 应该是实现了一个默认的组件传递参数) 之类的 React 元素本质是 对象,在 react 中任何东西都可以同 props 进行传递。

#　特例关系

官方举得　栗子　是 Dialog 中需要实现一个特殊的 WelcomeDialog 