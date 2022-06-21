import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostAC, updateNewPostTextAC, ActionType, PostType} from "../../../redux/profileReducer";
import {useDispatch} from "react-redux";



type MyPostPropsType = {
    posts: PostType[]
    newPostText: string
    //dispatch: (action: ActionType) => void
    // postMessage: string
    addPost: (postMessage: string) => void
    updateNewPostText: (event: string) => void
}

export const MyPosts: React.FC<MyPostPropsType> = (props) => {

    let postElement = props.posts.map(post => <Post key={post.id}
                                                    id={post.id}
                                                    message={post.message}
                                                    //like={post.like}
                                                    likesCount={post.likesCount}/>)

    //const dispatch = useDispatch()

    const onClickHandler = () => {
        //props.dispatch({type: "ADD-POST", postText: props.newPostText})
        //props.dispatch(addPostAC(props.newPostText))
        props.addPost(props.newPostText)
        //props.updateNewPostText('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
         props.updateNewPostText(e.currentTarget.value)
        //props.dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: e.currentTarget.value})
        //props.dispatch(updateNewPostTextAC(e.currentTarget.value))
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

