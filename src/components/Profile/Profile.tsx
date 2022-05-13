import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    newPostText: string
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <nav>
            <div>
                <ProfileInfo/>

                <MyPosts
                    posts={props.profilePage.posts}
                    newPostText={props.newPostText}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />
            </div>
        </nav>
    )
}

