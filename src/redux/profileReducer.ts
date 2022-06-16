import {v1} from "uuid";
import {debug} from "util";

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


export type ActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>

const initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', like: 'like', likesCount: '5'},
        {id: v1(), message: "It's my first post", like: 'like', likesCount: '12'}
    ]
}

export const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    debugger

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: v1(),
                message: action.postText,
                like: 'like',
                likesCount: '0'
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newPostText
            return state

        default:
            return state
    }
}


export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}

export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: newPostText
    } as const
}


