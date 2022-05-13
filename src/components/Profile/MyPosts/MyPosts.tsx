import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts: React.FC<MyPostPropsType> = (props) => {

    let postElement = props.posts.map(post => <Post key={post.id}
                                                    id={post.id}
                                                    message={post.message}
                                                    like={post.like}
                                                    likesCount={post.likesCount}/>)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addPost(props.newPostText)
        //props.updateNewPostText('')
    }

    return (
        <div className={style.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <input value={props.newPostText} onChange={onChangeHandler}/>
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

