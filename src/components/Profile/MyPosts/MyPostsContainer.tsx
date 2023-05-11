import React from 'react';
import {addPostAC} from "redux/profileReducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "redux/reduxStore";


const mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         callback: (message: string) => {
//             dispatch(addPostAC(message))
//         }
//     }
// }

export const MyPostsContainer = connect(mapStateToProps,
    {addPostAC})(MyPosts)