import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/profileReducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {RootStateType} from "../../redux/reduxStore";

type ProfilePropsType = {
    store: RootStateType
    //profilePage: ProfilePageType
    //newPostText: string
    //dispatch:(action: ActionType) => void
    //postMessage: string
    //addPost: (postMessage: string) => void
    //updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <nav>
            <div>
                <ProfileInfo/>

                <MyPostsContainer
                    store={props.store}
                    // posts={props.profilePage.posts}
                    // newPostText={props.newPostText}
                    // dispatch={props.dispatch}
                    // //postMessage={props.postMessage}
                    //updateNewPostText={props.updateNewPostText}
                />
            </div>
        </nav>
    )
}

