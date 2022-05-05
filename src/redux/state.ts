import {v1} from "uuid";

type MessageType = {
    id: string
    message: string
}
type DialogType = {
    id: string
    name: string
}
type PostType = {
    id: string
    message: string
    like: string
    likesCount: string
}
type ProfilePageType = {
    posts: Array<PostType>
}
type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hi, how are you?', like: 'like', likesCount: '5'},
            {id: v1(), message: "It's my first post", like: 'like', likesCount: '12'}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Dmitry'},
            {id: v1(), name: 'Yulia'},
            {id: v1(), name: 'Aleksandr'},
            {id: v1(), name: 'Evgeniy'},
            {id: v1(), name: 'Nikolay'},
            {id: v1(), name: 'Victor'}
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How is your it-kamasutra?'},
            {id: v1(), message: 'Yo-Yo'}
        ]
    },
    sidebar: {}
}
export default state