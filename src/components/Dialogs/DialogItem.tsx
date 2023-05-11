import React from "react";
import {NavLink} from "react-router-dom";
import style from './DialogItem.module.css'

type PropsDialogItemType = {
    id: string
    name: string
}

export const DialogItem = (props: PropsDialogItemType) => {
    return (
        <div className={style.dialog}>
            <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
                 alt="avatarka"/>
            <NavLink to={'/dialogs/' + props.id} activeClassName={style.active} className={style.name}>{props.name}</NavLink>
        </div>
    )
}