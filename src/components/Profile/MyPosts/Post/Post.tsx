import React from 'react';
import classes from './Post.module.css'

type PostPropsType = {
    message: string
    like: string
    likesCount: string
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={classes.item}>
            <img
                src='https://w7.pngwing.com/pngs/172/696/png-transparent-garfield-odie-cartoon-comics-the-cat-cartoon-thumbnail.png'/>
            {props.message}
            <div>
                <span> {props.like} {props.likesCount}</span>
            </div>
        </div>
    )
}

