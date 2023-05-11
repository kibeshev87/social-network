import {DataType} from "redux/socialNetworkApi";

type InitialStateType = typeof initialState

const initialState = {
    auth: {
        id: 20500,
        email: '',
        login: ''
    }
}


export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA': {
            return {
                ...state, auth: action.auth
            }
        }
        default:
            return state
    }
}


export type AuthReducerActionType = SetAuthUserDataACType

export type SetAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (auth: DataType) =>
    ({type: 'SET-AUTH-USER-DATA', auth} as const)