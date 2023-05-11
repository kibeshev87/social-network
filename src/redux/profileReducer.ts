import {v1} from "uuid";

export type PostType = {
    id: string
    message: string
    like: number
}

export type ProfileType = null | {
    userId: number
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string
        large: string
    }

    // aboutMe: string
    // contacts: {
    //     facebook: string
    //     website: string | null
    //     vk: string
    //     twitter: string
    //     "instagram": string
    //     "youtube": string | null
    //     "github": string
    //     "mainLink": string | null
    // },
    // "lookingForAJob": boolean
    // "lookingForAJobDescription": string
    // "fullName": string
    // "userId": 2,
    // "photos": {
    //     "small": string
    //     "large": string
    // }
}

type ProfilePageType = typeof initialState


const initialState = {
    posts: [
        {id: '1', message: 'It is my first post', like: 2},
        {id: '2', message: 'Hi! How are you?', like: 18},
        {id: '3', message: 'Yo', like: 9},
    ],
    profile: null as ProfileType
}


export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {id: v1(), message: action.message, like: 0}
            return {
                ...state, posts: [...state.posts, newPost]
            }
        }
        case "SET-FRIEND-PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state
    }
};

export type ProfileReducerType = AddPostACType | SetFriendUserProfileACType


export type AddPostACType = ReturnType<typeof addPostAC>
export type SetFriendUserProfileACType = ReturnType<typeof setFriendUserProfileAC>

export const addPostAC = (message: string) =>
    ({type: 'ADD-POST', message} as const)

export const setFriendUserProfileAC = (profile: ProfileType) =>
    ({type: 'SET-FRIEND-PROFILE', profile} as const)
