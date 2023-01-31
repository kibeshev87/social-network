import {v1} from "uuid";

export type PostType = {
    id: string
    message: string
    like: number
}

type ProfilePageType = {
    posts: PostType[]
}


const initialState: ProfilePageType = {
    posts: [
        {id: '1', message: 'It is my first post', like: 2},
        {id: '2', message: 'Hi! How are you?', like: 18},
        {id: '3', message: 'Yo', like: 9},
    ]
}

export type ProfileReducerType = AddPostACType

export const profileReducer = (state = initialState, action: ProfileReducerType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {id: v1(), message: action.payload.message, like: 0}
            return {
                ...state, posts: [newPost, ...state.posts]
            }
        }
        default:
            return state
    }
};

export type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (message: string) => {
    return {
        type: 'ADD-POST',
        payload: {
            message
        }
    } as const
}
