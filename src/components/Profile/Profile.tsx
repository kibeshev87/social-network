import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

 type ProfilePropsType = {
     state: ProfilePageType
 }

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <nav>
            <div>
                <ProfileInfo/>

                <MyPosts posts={props.state.posts}/>
            </div>
        </nav>
    )
}

