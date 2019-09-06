refs 

# 到底是个啥？

添加了这个属性的 

# 使用场景

* 管理焦点
* 触发强制动画
* 集成第三方 DOM 库

# current 可以获取 DOM 节点

* 当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
* 当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。

# 不能再函数组件上使用 ref

因为没有实例，所以要使用 ref 需要将组件