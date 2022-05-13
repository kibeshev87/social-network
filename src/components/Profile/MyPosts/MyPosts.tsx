import React, {ChangeEvent, useState} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostCallback, PostType, ProfilePageType} from "../../../redux/state";

type MyPostPropsType = {
    posts: PostType[]
    message: string
    addPostCallback: (postMessage: string) => void
    onChangeCallback: (newText: string) => void
}

export const MyPosts: React.FC<MyPostPropsType> = (props) => {

    let postElement = props.posts.map(post => <Post key={post.id}
                                                    id={post.id}
                                                    message={post.message}
                                                    like={post.like}
                                                    likesCount={post.likesCount}/>)


    // let onClickHandler = () => {
    //     let text = newPostElement.current.value
    // }
    //
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeCallback(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addPostCallback(props.message)
    }

    return (
        <div className={style.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea value={props.message} onChange={onChangeHandler}/>
                </div>
                <div>
                    <button onClick={onClickHandler}>Add Post</button>
                </div>
            </div>
            <div className={style.posts}>

                {postElement}

            </div>
        </div>
    )
}

