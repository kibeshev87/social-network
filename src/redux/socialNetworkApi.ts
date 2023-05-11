import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        'API-KEY': '750889c8-f4ed-4786-bc49-0a937e4ab551'
    }
})

export const networkApi = {
    setUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
    },
    setFriendProfiles(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    onClickChangePage(pageNumber: number, pageSize: number) {
        return instance.get(`/users?page=${pageNumber}&count=${pageSize}`)
    }
}
export const authApi = {
    authMy() {
        return instance.get<ResponseType>(`/auth/me`)
    }
}

type ResponseType = {
    resultCode: number
    messages: string[],
    data: DataType
}

export type DataType = {
    id: number
    email: string,
    login: string
}

















