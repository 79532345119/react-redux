import React from 'react'

function Post({post}) {
    return (
        <div className="card">
            <h3>{post.title}</h3>
            <h5>{post.body}</h5>
        </div>
    )
}

export default Post
