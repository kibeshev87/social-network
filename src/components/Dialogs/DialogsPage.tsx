import React, {KeyboardEvent, ChangeEvent, useState} from 'react';
import style from './Dialogs.module.css'
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {addMessageAC, DialogType, MessageType} from "../../redux/dialogsReducer";
import {useDispatch} from "react-redux";

type DialogsPagePropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}


export const DialogsPage = (props: DialogsPagePropsType) => {

    const dispatch = useDispatch()

    const [message, setMessage] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
    }

    const addMessage = () => {
        if (message.trim() !== '') {
            dispatch(addMessageAC(message))
            setMessage('')
        }
    }

    const onClickHandler = () => {
        addMessage()
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter') {
            addMessage()
        }
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)}
            </div>
            <div className={style.messages}>
                {props.messages.map(el => <Message key={el.id} message={el.message}/>)}
                <div>
                    <textarea placeholder={'New Message'} value={message} onChange={onChangeHandler}
                              autoFocus/>
                </div>
                <div>
                    <button onClick={onClickHandler} onKeyPress={onKeyPressHandler}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

