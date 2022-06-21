import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./MessageItem/Message";
import {ActionType, addMessageAC, DialogsPageType, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
    //dialogsPage: DialogsPageType
    //newMessageText: string
    //dispatch: (action: ActionType) => void
    //updateNewMessageText: (newMessageText: string) => void
    //addMessage: (newPostText: string) => void
}
export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    let state = props.store.getState()

    const onClickHandler = () => {
        props.store.dispatch(addMessageAC(state.dialogsPage.newMessageText))
        //props.dispatch({type: "ADD-MESSAGE", textMessage: props.newMessageText})
        //props.addMessage(props.newMessageText)
        //props.updateNewMessageText('')
    }

    const onChangeHandler = (event: string) => {
        props.store.dispatch(updateNewMessageTextAC(event))
        //props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: e.currentTarget.value})
        //props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <Dialogs dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}
                 addMessage={onClickHandler}
                 updateNewMessageText={onChangeHandler}
        />
    )
}

