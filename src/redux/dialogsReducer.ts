import {v1} from "uuid";

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}


//export type DialogsReducerType = AddMessageACType
const initialState: DialogsPageType = {
    dialogs: [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Julia'},
        {id: '3', name: 'Timur'}
    ],
    messages: [
        {id: '1', message: 'hello'},
        {id: '2', message: 'hello'},
        {id: '3', message: 'hello'},
    ]
}

export const dialogsReducer = (state = initialState, action: AddMessageACType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage: MessageType = {id: v1(), message: action.payload.message}
            return {
                ...state, messages: [newMessage, ...state.messages]
            }
        }
        default:
            return state
    }
}

export type AddMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = (message: string) => {
    return {
        type: 'ADD-MESSAGE',
        payload: {message}
    } as const
}
