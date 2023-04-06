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
            const newMessage: MessageType = {id: v1(), message: action.message}
            return {
                ...state, messages: [...state.messages, newMessage]
            }
        }
        default:
            return state
    }
}

export type AddMessageACType = ReturnType<typeof addMessageAC>

export const addMessageAC = (message: string) =>
    ({type: 'ADD-MESSAGE', message} as const)
