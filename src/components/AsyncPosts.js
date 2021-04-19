import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/actions'
import Post from './Post'

function AsyncPosts() {
    const dispatch = useDispatch()
    const asyncPosts = useSelector(state => state.posts.asyncPosts)


    return (
        <div>
            <h1>Async Posts</h1>
            <button onClick={()=> dispatch(getPosts())}>Get all posts</button>
            {asyncPosts.map(post => <Post post={post} key={post.id} />)}
        </div>
    )
}


export default AsyncPosts




/* const mapStateToProps = state => {
    return {
        asyncPosts: state.posts.asyncPosts
    }
}

const mapDispatchToProps = {
    getPosts
} */

// export default connect(mapStateToProps, mapDispatchToProps)(AsyncPosts)