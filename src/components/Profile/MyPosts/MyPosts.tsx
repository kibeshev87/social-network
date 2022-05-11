import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";

type MyPostPropsType = {
    posts: PostType[]
}

export const MyPosts: React.FC<MyPostPropsType> = (props) => {

    let postElement = props.posts.map(post => <Post key={post.id}
                                                    id={post.id}
                                                    message={post.message}
                                                    like={post.like}
                                                    likesCount={post.likesCount}/>)

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

                {postElement}

                {/*<Post message={post[0].message}*/}
                {/*      like={post[0].like}*/}
                {/*      likesCount={post[0].likesCount}/>*/}

                {/*<Post message={post[1].message}*/}
                {/*      like={post[1].like}*/}
                {/*      likesCount={post[1].likesCount}/>*/}
            </div>
        </div>
    )
}

