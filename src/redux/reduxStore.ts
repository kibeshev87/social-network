import {combineReducers, legacy_createStore as createStore } from 'redux'
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})
export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>



