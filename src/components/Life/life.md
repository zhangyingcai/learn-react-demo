生命周期：

# 

每次创建都有三个阶段

* render 阶段 纯净且没有副作用，可能会被React暂停，终止或者重新启动。
* pre-commit 阶段 可以读取Dom
* Commit 阶段, 可以使用 Dom , 运行无副作用，安排更新。

# 创建过程

* constructor
* getDerivedStateFromProps（16.3 新引入的属性）
* render 
* componentDidMount

# 更新时的生命周期

* getDerivedStateFromProps
* shouldComponentUpdate() // 可以进行新能优化，可以手动设置ui是否需要更新
* render()
* getSnapshotBeforeUpdate()（16.3）