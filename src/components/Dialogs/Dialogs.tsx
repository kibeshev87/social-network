import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./MessageItem/Message";
import {ActionType, addMessageAC, DialogsPageType, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {DialogType, MessageType} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
    //dispatch: (action: ActionType) => void
    updateNewMessageText: (event: string) => void
    addMessage: (newPostText: string) => void
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.messages
        .map(message => <Message key={message.id} id={message.id} message={message.message}/>)

    const onClickHandler = () => {
        //props.dispatch(addMessageAC(props.newMessageText))
        //props.dispatch({type: "ADD-MESSAGE", textMessage: props.newMessageText})
        props.addMessage(props.newMessageText)
        //props.updateNewMessageText('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        //props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
        //props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: e.currentTarget.value})
        props.updateNewMessageText(e.currentTarget.value)
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

