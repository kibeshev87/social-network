import React, {KeyboardEvent, ChangeEvent, useState} from 'react';
import {NewPost} from "./post/NewPost";
import style from './MyPosts.module.css'
import {addPostAC, PostType} from "../../../redux/profileReducer";
import {useDispatch} from "react-redux";

type MyPostPropsType = {
    posts: PostType[]
}


export const MyPosts = (props: MyPostPropsType) => {

    const dispatch = useDispatch()

    const [message, setMessage] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
    }

    const onClickHandler = () => addPost()

    const addPost = () => {
        debugger
        if (message.trim() !== '') {
            dispatch(addPostAC(message))
            setMessage('')
        }
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLButtonElement>) => {
        if(event.key === 'Enter')
            addPost()
    }

    return (
        <div className={style.myPostWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder={'New Message'} value={message} onChange={onChangeHandler} autoFocus/>
            </div>
            <div>
                <button onClick={onClickHandler} onKeyPress={onKeyPressHandler} >Add post</button>
            </div>
            <div className={style.posts}>
                {props.posts.map(el => <NewPost key={el.id} message={el.message} like={el.like}/>)}
            </div>
        </div>
    );
};

