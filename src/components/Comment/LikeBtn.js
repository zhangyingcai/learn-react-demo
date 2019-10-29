import * as React from 'react'

export class LikeBtn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            status: props.status
        }
    }
    likeText = '点赞'
    cancle = '取消'

    btnClick = ()=>{
        this.setState({
            status: !this.state.status
        })
    }

    render() {
        const { status } = this.state
        return(<button
        onClick={this.btnClick}>
            {status ? this.likeText : this.cancle}
        </button>)
    }
}