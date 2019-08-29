import React from 'react'
import CommentBox from './CommentBox'
import CommentList from './CommentList'

class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comments : ['this is my first line']
        }
    }
    render() {
        return (
            <div>
                <CommentList comments={this.state.comments}></CommentList>
                <CommentBox comments={this.state.comments}></CommentBox>
            </div>
        )
    }
}
export default Comment;