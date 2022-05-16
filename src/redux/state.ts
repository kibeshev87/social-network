import {v1} from "uuid";

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
export type StoreType = {
    _state: RootStateType

    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void

    //addPost: (postMessage: string) => void
    //updateNewPostText: (newPostText: string) => void
    //addMessage: (textMessage: string) => void
    //updateNewMessageText: (newMessageText: string) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = AddPostActionType
    | UpdateNewPostTextType
    | AddMessageActionType
    | UpdateNewMessageTextType

type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    textMessage: string
}
type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
type UpdateNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}

let store: StoreType = {
    _state: {
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
    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    // addPost(postMessage: string) {
    //     const newPost: PostType = {
    //         id: v1(),
    //         message: postMessage,
    //         like: 'like',
    //         likesCount: '0'
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },
    // updateNewPostText(newPostText: string) {
    //     this._state.profilePage.newPostText = newPostText
    //     this._callSubscriber()
    // },
    /* addMessage(textMessage: string) {
         const newMessage: MessageType = {
             id: v1(),
             message: textMessage
         }
         this._state.dialogsPage.messages.push(newMessage)
         this._state.dialogsPage.newMessageText = ''
         this._callSubscriber()
     },
     updateNewMessageText(newMessageText: string) {
         this._state.dialogsPage.newMessageText = newMessageText
         this._callSubscriber()
     },
 */
    dispatch(action: ActionType) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: v1(),
                message: action.postMessage,
                like: 'like',
                likesCount: '0'
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber()


        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: v1(),
                message: action.textMessage
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()


        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessageText
            this._callSubscriber()
        }
    }
}

export default store