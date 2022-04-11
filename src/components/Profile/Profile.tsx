import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import navBar from "../NavBar/NavBar";
//
// type ProfilePropsType = {
//     images: string
// }

const Profile = () => {
    return (
        <nav>
            <div>
                <img
                    src='https://media.gettyimages.com/photos/leadership-concept-with-paper-airplanes-picture-id1132930101?s=612x612'/>
                <div>
                    ava + description
                </div>
                <MyPosts/>
            </div>
        </nav>
    )
}

export default Profile