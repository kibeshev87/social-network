import React from 'react';
import {AvaAndImg} from "../profileInfo/AvaAndImg";
import {PostType} from "../../../redux/profileReducer";
import {MyPostsContainer} from "./MyPostsContainer";

/*
type ProfilePropsType = {
    posts: PostType[]
}
*/

export const Profile = () => {
    return (
        <div>
            <AvaAndImg/>
            <MyPostsContainer/>
        </div>
    );
};

