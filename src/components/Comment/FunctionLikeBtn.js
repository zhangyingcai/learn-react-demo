
import * as React from 'react'

// ToDo 函数组件怎么写？
export function FunctionLikeBtn(props) {
    this.status = false
    this.likeText = "确定"
    this.cancle = "取消"
    this.btnClick = ()=> {
        this.status = !this.status
    }
    return(<button
        onClick={this.btnClick}>
            {this.status ? this.likeText : this.cancle}
        </button>)
}