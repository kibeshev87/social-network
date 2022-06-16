import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostAC, updateNewPostTextAC, ActionType, PostType} from "../../../redux/profileReducer";
import {useDispatch} from "react-redux";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/reduxStore";



type MyPostPropsType = {
    store: RootStateType
    // posts: PostType[]
    // newPostText: string
    // dispatch: (action: ActionType) => void
    // postMessage: string
    //addPost: (postMessage: string) => void
    //updateNewPostText: (newText: string) => void
}

export const MyPostsContainer: React.FC<MyPostPropsType> = (props) => {

    let state = props.store.getState()

    /*let postElement = props.posts.map(post => <Post key={post.id}
                                                    id={post.id}
                                                    message={post.message}
                                                    like={post.like}
                                                    likesCount={post.likesCount}/>)
*/
    //const dispatch = useDispatch()

    const onClickHandler = () => {
        //props.dispatch({type: "ADD-POST", postText: props.newPostText})
        props.dispatch(addPostAC(props.newPostText))
        //props.addPost(props.newPostText)
        //props.updateNewPostText('')
    }

    const onChangeHandler = (event: string) => {
        // props.updateNewPostText(e.currentTarget.value)
        //props.dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: e.currentTarget.value})
        props.dispatch(updateNewPostTextAC(event))
    }

    return (<MyPosts posts={props.posts} newPostText={props.newPostText} addPost={onClickHandler} updateNewPostText={onChangeHandler}/>)
}

