import React from 'react'

const CommentList = ({ comments })=>{
    return (
        <ul>
            {
                comments.map((item,index) =>
                <li key={index}>{item}</li>
                )
            }
        </ul>
    )
}

export default CommentList;