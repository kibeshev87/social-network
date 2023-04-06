import React from 'react';
import {addPostAC} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

/*type MyPostContainerPropsType = {
    posts: PostType[]
}


export const MyPostsContainer = (props: MyPostContainerPropsType) => {

    const dispatch = useDispatch()

    const addPost = (message: string) => {
            dispatch(addPostAC(message))
    }

    return (
        <MyPosts posts={props.posts} callback={addPost} />
    )
}*/

const mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        callback: (message: string) => {
            dispatch(addPostAC(message))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)