import React from 'react'
/* 这是一个受控组件 */
class CommentBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comment: ''
        }
        // this.commentChange = this.commentChange.bind(this)
    }
    commentChange(e) {
        console.log(this)
        this.setState({
            comment:e.target.value
        })
    }
    render() {
        return (
            <form>
                <input 
                    value={this.state.comment}
                    onChange={e=>this.commentChange(e)}
                    placeholder="请输入内容"
                />
                <button
                    type="submit"
                >提交</button>
            </form>
        )
    }
}

export default CommentBox