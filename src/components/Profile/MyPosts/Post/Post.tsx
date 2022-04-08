import React from 'react';
import classes from './Post.module.css'

function Post() {
    return (
        <div className={classes.item}>
            <img src='https://w7.pngwing.com/pngs/172/696/png-transparent-garfield-odie-cartoon-comics-the-cat-cartoon-thumbnail.png'/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post