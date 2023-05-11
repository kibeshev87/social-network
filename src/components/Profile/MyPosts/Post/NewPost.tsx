import React from 'react';
import style from '../newPost.module.css'
import avatarNewPosts from '../../../../accets/images/my_Post_Image.png'

type newPostPropsType = {
    message: string
    like: number
}

export const NewPost = (props: newPostPropsType) => {
    return (
        <div className={style.item}>
            <img src={avatarNewPosts} alt="avatar"/>
            {props.message}
            <div><span>like {props.like}</span></div>
        </div>
    )
}

