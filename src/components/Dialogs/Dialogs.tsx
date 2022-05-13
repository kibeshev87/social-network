import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./MessageItem/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
    updateNewMessageText: (newMessageText: string) => void
    addMessage: (newPostText: string) => void
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.dialogsPage.messages
        .map(message => <Message key={message.id} id={message.id} message={message.message}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addMessage(props.newMessageText)
        //props.updateNewMessageText('')
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                {messagesElements}
                <div>
                    <input value={props.newMessageText} onChange={onChangeHandler}/>
                </div>
                <div>
                    <button onClick={onClickHandler}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

