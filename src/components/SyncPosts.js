import React from 'react'
import Post from './Post'
import {connect, useSelector} from 'react-redux'




function SyncPosts({syncPosts}) {


    syncPosts = useSelector(state => state.posts.syncPosts)


    return (
        <div>
           <h1>Sync Posts</h1>
           {
               syncPosts.map(post => (
                   <Post post = {post} key={post.id} />
               ))
           }

        </div>
    )
}

/* const mapStateToProps = state => {
    return {
        syncPosts: state.posts.syncPosts
    }
} */

//export default connect(mapStateToProps, null)(SyncPosts)

export default SyncPosts
