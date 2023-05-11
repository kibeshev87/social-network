export type UserType = {
    id: number
    name: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    status: string
}

type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true
}


export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerType): InitialStateType => {
    switch (action.type) {

        case 'FOLLOW': {
            return {
                ...state, users: state.users.map(el => el.id === action.userId
                    ? {...el, followed: true} : el)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state, users: state.users.map(el => el.id === action.userId
                    ? {...el, followed: false} : el)
            }
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "SET-IS-LOADING": {
            return {...state, isLoading: action.isLoading}
        }

        default:
            return state
    }
}

type UsersReducerType = FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountType
    | SetIsLoadingACType

export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
export type SetIsLoadingACType = ReturnType<typeof setIsLoadingAC>

export const followAC = (userId: number) =>
    ({type: 'FOLLOW', userId} as const)

export const unFollowAC = (userId: number) =>
    ({type: 'UNFOLLOW', userId} as const)

export const setUsersAC = (users: UserType[]) =>
    ({type: 'SET-USERS', users} as const)

export const setCurrentPageAC = (currentPage: number) =>
    ({type: 'SET-CURRENT-PAGE', currentPage} as const)

export const setTotalUsersCountAC = (totalCount: number) =>
    ({type: 'SET-TOTAL-USERS-COUNT', totalCount} as const)

export const setIsLoadingAC = (isLoading: boolean) =>
    ({type: 'SET-IS-LOADING', isLoading} as const)



