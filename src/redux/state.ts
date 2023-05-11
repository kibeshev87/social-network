import React from "react";


/*
import {AddPostACType, profileReducer} from "./profileReducer";
import {AddMessageACType, dialogsReducer} from "./dialogsReducer";

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type PostType = {
    id: string
    message: string
    like: number
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type ProfilePageType = {
    posts: PostType[],

}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    subscribe: (callBack: (state: StateType) => void) => void
    _callSubscriber: (state: StateType) => void
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = AddMessageACType | AddPostACType
//export type ActionsTypes = AddMessageACType & AddPostACType


let store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Dima'},
                {id: '2', name: 'Julia'},
                {id: '3', name: 'Timur'},
                {id: '4', name: 'Vlad'},
                {id: '5', name: 'Valek'},
            ],
            messages: [
                {id: '1', message: 'Hi. This is Dima'},
                {id: '2', message: 'Hi. This is Julia'},
                {id: '3', message: 'Hi. This is Timur'},
                {id: '4', message: 'Hi. This is Vlad'},
                {id: '5', message: 'Hi. This is Valek'},
            ]
        },
        profilePage: {
            posts: [
                {id: '1', message: 'It is my first post', like: 2},
                {id: '2', message: 'Hi! How are you?', like: 18},
                {id: '3', message: 'Yo', like: 9},
            ]
        }

    },


    /!*switch (action.type) {
        case 'ADD-POST': {
            let newPost = {id: v1(), message: action.payload.message, like: 0}
            this._state.profilePage.posts.push(newPost)
            //copyState = {...this._state, posts: [newPost, ...this._state.posts]}
            return this._callSubscriber(this._state)
        }
        case 'ADD-MESSAGE': {
            let newMessage: MessageType = {id: v1(), message: action.payload.message}
            this._state.dialogsPage.messages.push(newMessage)
            return this._callSubscriber(this._state)
        }
        default:
            return this._state
    }*!/
    dispatch(action) {
        this._state = profileReducer(this._state, action) //AddPostACType
        this._state = dialogsReducer(this._state, action) //AddMessageACType
        this._callSubscriber(this._state)
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubscriber = callback
    },
    _callSubscriber(state) {
        console.log('state changed')
    }
}*/
// export default store

/*
export type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (message: string) => {
    return {
        type: 'ADD-POST',
        payload: {message}
    } as const
}
*/

/*export type AddMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = (message: string) => {
    return {
        type: 'ADD-MESSAGE',
        payload: {message}
    } as const
}*/


/*if (action.type === 'ADD-POST') {
            let newPost = {id: v1(), message: action.payload.message, like: 0}
            let copyState = {...this._state, post: [newPost, ...this._state.posts]}
            //this._state.posts.push(newPost)
            this._callSubscriber(copyState)
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {id: v1(), message: action.payload.message}
            this._state.messages.push(newMessage)
            this._callSubscriber(this._state)
        }*/
/*addMessage(message: string) {
        let newMessage: MessageType = {id: v1(), message}
        this._state.messages.push(newMessage)
        this._callSubscriber(this._state)
    },
    addPost(post: string) {
        let newPost: PostType = {id: v1(), message: post, like: 0}
        this._state.posts.push(newPost)
        this._callSubscriber(this._state)
    },*/
/*switch (action.type) {
    case 'ADD-POST': {
        let newPost = {id: v1(), message: action.payload.message, like: 0}
        return {...this._state, posts: [...this._state.posts, newPost]}
        this._callSubscriber(this._state)
        //return this.getState()
    }
    case 'ADD-MESSAGE': {
        let newMessage: MessageType = {id: v1(), message: action.payload.message}
        this._state.messages.push(newMessage)
        this._callSubscriber(this._state)
        return this.getState()
    }
    default: return this._state
}*/


/*export type RerenderEntireTreeType = (state: StateType) => void
export type AddMessageType = (message: string) => void
export type AddPostType = (post: string) => void
export type SubscribeType = (callback: (state: StateType) => void) => void
export const state: StateType = {
    dialogs: [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Julia'},
        {id: '3', name: 'Timur'},
        {id: '4', name: 'Vlad'},
        {id: '5', name: 'Valek'},
    ],
    messages: [
        {id: '1', message: 'Hi. This is Dima'},
        {id: '2', message: 'Hi. This is Julia'},
        {id: '3', message: 'Hi. This is Timur'},
        {id: '4', message: 'Hi. This is Vlad'},
        {id: '5', message: 'Hi. This is Valek'},
    ],
    posts: [
        {id: '1', message: 'It is my first post', like: 2},
        {id: '2', message: 'Hi! How are you?', like: 18},
        {id: '3', message: 'Yo', like: 9}
    ],
}

let rerenderEntireTree = (state: StateType) => {
    console.log('State changed')
}

export const addMessage = (message: string) => {
    let newMessage = {id: v1(), message}
    state.messages.push(newMessage)
    rerenderEntireTree(state)
}

export const addPost = (post: string) => {
    let newPost = {id: v1(), message: post, like: 0}
    //let copyState = {...state, post: [newPost, ...state.posts]}
    state.posts.push(newPost)
    rerenderEntireTree(state)
}

export const subscribe = (callback: (state: StateType) => void) => {
    rerenderEntireTree = callback
}*/

