import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//
// type ProfilePropsType = {
//     images: string
// }

const Profile = () => {
    return (
        <nav>
            <div>
                <ProfileInfo/>

                <MyPosts/>
            </div>
        </nav>
    )
}

export default Profile