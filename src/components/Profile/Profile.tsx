import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profilePage: ProfilePageType
    newPostText: string
    dispatch:(action: ActionType) => void
    //postMessage: string
    //addPost: (postMessage: string) => void
    //updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <nav>
            <div>
                <ProfileInfo/>

                <MyPosts
                    posts={props.profilePage.posts}
                    newPostText={props.newPostText}
                    dispatch={props.dispatch}
                    //postMessage={props.postMessage}
                    //updateNewPostText={props.updateNewPostText}
                />
            </div>
        </nav>
    )
}

