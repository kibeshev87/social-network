import React from 'react';
import style from "./Dialogs.module.css";

type MessagePropsText = {
    message: string
}

export const Message = (props: MessagePropsText) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}
