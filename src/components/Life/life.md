生命周期：

# 

每次创建都有三个阶段

* render 阶段 纯净且没有副作用，可能会被React暂停，终止或者重新启动。
* pre-commit 阶段 可以读取Dom
* Commit 阶段, 可以使用 Dom , 运行无副作用，安排更新。

# 创建过程

* constructor
* getDerivedStateFromProps（16.3 新引入的属性） // 外部的属性初始化内部的状态
* render 
* componentDidMount

# 更新时的生命周期

* getDerivedStateFromProps 当state 需要从 props 初始化时使用 // 是一个静态函数 无法访问到this
* shouldComponentUpdate() // 可以进行新能优化，可以手动设置ui是否需要更新
* render()
* getSnapshotBeforeUpdate()（16.3） // 新的属性
* componentDidUpdate() 数据更新时最后调用的钩子 应用场景，比如 根据id获取不同的文章内容

# 卸载时的生命周期

* commponentWillUnmount() 做一些资源释放的事情