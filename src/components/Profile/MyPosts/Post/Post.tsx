import React from 'react';
import classes from './Post.module.css'
import {PostType} from "../../../../redux/profileReducer";

type PostPropsType = PostType

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={classes.item}>
            <img
                src='https://w7.pngwing.com/pngs/172/696/png-transparent-garfield-odie-cartoon-comics-the-cat-cartoon-thumbnail.png'/>
            {props.message}
            <div>
                <span id={props.id}> {props.like} {props.likesCount}</span>
            </div>
        </div>
    )
}

