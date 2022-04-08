import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
            <div className={classes.content}>
                <img
                    src='https://media.gettyimages.com/photos/leadership-concept-with-paper-airplanes-picture-id1132930101?s=612x612'/>
                <div>
                    ava + description
                </div>
                <MyPosts/>
            </div>
    )
}

export default Profile