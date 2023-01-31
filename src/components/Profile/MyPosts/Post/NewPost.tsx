import React from 'react';
import style from '../newPost.module.css'

type newPostPropsType = {
    message: string
    like: number
}

export const NewPost = (props: newPostPropsType) => {
    //const {name, like} = props
    return (
        <div className={style.item}>
            <img src="https://ouch-cdn2.icons8.com/NCpFQN7t3dENNP1QNXexXH5ZZtiApb1r8pox1oDb9nY/rs:fit:456:456/extend:true/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png"
                 alt="avatar"/>
            {props.message}
            <div><span>like {props.like}</span></div>

        </div>
            );
};

