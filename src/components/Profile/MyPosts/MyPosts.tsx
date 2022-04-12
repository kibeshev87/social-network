import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={style.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message='Hi, how are you?' like='like' likesCount='5'/>
                <Post message="It's my first post" like='like' likesCount='12'/>
            </div>
        </div>
    )
}

export default MyPosts