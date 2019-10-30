// 自动加载数据的时候，怎么保证数据展示到之前的位置
import React from 'react'
import './RefsList.css'

export class RefsList extends React.Component {
    constructor() {
        super()
        this.state = {
            commonList: []
        }
        this.timer = null
    }
    commonStart = () => {
        if (this.timer) return
        this.timer = setInterval(() => {
            this.addCommon()
        }, 1000);
    }
    addCommon() {
        const {commonList} = this.state
        commonList.push({text: commonList.length + 1})
        this.setState({commonList})
    }
    commonStop = () => {
        if (!this.timer) return
        clearInterval(this.timer)
        this.timer = null
    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
        this.timer = null
    }
    // getSnapshotBeforeUpdate 经常和 componentDidupdate 配合使用
    getSnapshotBeforeUpdate(){
        return this.listNode.scrollHeight
    }
    componentDidUpdate(preProps, preState, preScrollHeight) {
        console.log(preProps, preState, preScrollHeight)
        const scrollTop = this.listNode.scrollTop;
        if (scrollTop < 5) return;
        this.listNode.scrollTop =
        scrollTop + (this.listNode.scrollHeight - preScrollHeight);
        }
    render() {
        const {commonList} = this.state
        return (
            <div>
                <section>
                    <button onClick={this.commonStart}>start</button><button onClick={this.commonStop}>stop</button>
                </section>
                <section className="commons-list" ref={e => this.listNode = e}>
                {commonList.map((item, index)=>{
                    return(
                        <p key={index}>{item.text}</p>
                    )
                })}
                </section>
            </div>
        )
    }
}