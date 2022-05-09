import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./MessageItem/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}
export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.state.dialogs

        .map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.state.messages
        .map(message => <Message key={message.id} id={message.id} message={message.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

