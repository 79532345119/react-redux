import React from 'react'
import {useState} from 'react'
import {connect, useDispatch} from 'react-redux'
import {createPost} from '../redux/actions'

function InputFolder(props) {

    
const dispatch = useDispatch()

 

    const [value, setValue] = useState([])

    const onCangeInputHandler = (event) => {
        setValue(event.target.value)
    }

    const submitHandler = () => {
        const newPost = {
            id: Date.now(),
            title: value,
            body: value
        }
        dispatch(createPost(newPost))
        setValue('')
    }


    return (
        <>
        <h1>Input your posts here</h1>
        <input type="text" placeholder="input your post here" value={value} onChange={onCangeInputHandler} />
        <button onClick={e => submitHandler(e)} >Создать пост</button>
        </>
    )
}

/* const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(InputFolder)  */


export default InputFolder