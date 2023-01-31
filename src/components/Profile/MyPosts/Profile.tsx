import React from 'react';
import {MyPosts} from "./MyPosts";
import {AvaAndImg} from "../profileInfo/AvaAndImg";
import {PostType, ProfileReducerType} from "../../../redux/profileReducer";

type ProfilePropsType = {
    posts: PostType[]
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <AvaAndImg/>
            <MyPosts posts={props.posts} />
        </div>
    );
};

