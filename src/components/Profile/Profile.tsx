import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostCallback, onChangeCallback, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    message: string
    addPostCallback: (postMessage: string) => void
    onChangeCallback: (newText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <nav>
            <div>
                <ProfileInfo/>

                <MyPosts
                    posts={props.state.posts}
                    message={props.message}
                    addPostCallback={props.addPostCallback}
                    onChangeCallback={props.onChangeCallback}
                />
            </div>
        </nav>
    )
}

