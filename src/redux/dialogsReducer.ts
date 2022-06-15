import {v1} from "uuid";

export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type DialogsPageType = {
    newMessageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


export type ActionType = ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

const initialState: DialogsPageType = {
    dialogs: [
        {id: v1(), name: 'Dmitry'},
        {id: v1(), name: 'Yulia'},
        {id: v1(), name: 'Aleksandr'},
        {id: v1(), name: 'Evgeniy'},
        {id: v1(), name: 'Nikolay'},
        {id: v1(), name: 'Victor'}
    ],
    newMessageText: '',
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your it-kamasutra?'},
        {id: v1(), message: 'Yo-Yo'}
    ]
}

export const dialogsReducer = (state = initialState, action: ActionType): DialogsPageType => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: v1(),
                message: action.textMessage
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state

        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText
            return state

        default:
            return state
    }

};

export const addMessageAC = (textMessage: string) => {
    return {
        type: 'ADD-MESSAGE',
        textMessage: textMessage
    } as const
}

export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText: newMessageText
    } as const
}


