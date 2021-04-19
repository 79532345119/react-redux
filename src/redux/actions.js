import { CREATE_POST, GET_POSTS } from "./types";


export function createPost(post) {
    return {
        type: CREATE_POST, payload: post
    }
}

export function getPosts() {
    return async dispatch => {
       const response = await fetch('https://jsonplaceholder.typicode.com/posts? limit=7')
       const json = await response.json()
       dispatch({ type: GET_POSTS, payload: json})
    }
}