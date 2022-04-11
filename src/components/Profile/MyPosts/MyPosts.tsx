import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' like='like' likesCount='5'/>
                <Post message="It's my first post" like='like' likesCount='12'/>
            </div>
        </div>
    )
}

export default MyPosts