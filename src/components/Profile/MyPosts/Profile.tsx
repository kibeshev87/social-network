import React from 'react';
import {AvaAndImg} from "../profileInfo/AvaAndImg";
import {MyPostsContainer} from "./MyPostsContainer";
import {ProfileType} from "redux/profileReducer";

type ProfileFCPropsType = {
    profile: ProfileType
}

export const ProfileFC = (props: ProfileFCPropsType) => {
    return (
        <div>
            <AvaAndImg profile={props.profile} />
            <MyPostsContainer/>
        </div>
    );
};

