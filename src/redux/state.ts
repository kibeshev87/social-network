import {v1} from "uuid";
import {renderEntireTree} from "../render";

export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type PostType = {
    id: string
    message: string
    like: string
    likesCount: string
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


let state: RootStateType = {
    profilePage: {
        messageForNewPost: '',
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

export function addPostCallback(postMessage: string) {
    const newPost: PostType = {
        id: v1(),
        message: postMessage,
        like: 'like',
        likesCount: '0'
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}

export const onChangeCallback = (newText: string) => {
    state.profilePage.messageForNewPost = newText
    renderEntireTree(state)
}

export default state