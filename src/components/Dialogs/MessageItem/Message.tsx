import React from 'react';
import style from './../Dialogs.module.css'

type MessagePropsType = {
    id: string
    message: string
}

export const Message:React.FC<MessagePropsType> = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}
