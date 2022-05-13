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
    newPostText: string
    posts: Array<PostType>
}
export type DialogsPageType = {
    newMessageText: string
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
        newPostText: '',
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
        newMessageText: '',
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How is your it-kamasutra?'},
            {id: v1(), message: 'Yo-Yo'}
        ]
    },
    sidebar: {}
}

export function addPost(postMessage: string) {
    const newPost: PostType = {
        id: v1(),
        message: postMessage,
        like: 'like',
        likesCount: '0'
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}

export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    renderEntireTree(state)
}

export const addMessage = (textMessage: string) => {
    const newMessage: MessageType = {
        id: v1(),
        message: textMessage
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    renderEntireTree(state)
}

export const updateNewMessageText = (newMessageText: string) => {
    state.dialogsPage.newMessageText = newMessageText
    renderEntireTree(state)
}

export default state