import React from 'react'
import './App.css'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {RootStateType, store} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
 //
 // type AppPropsType = {
 //     store: RootStateType
 // }
//let store: RootStateType = store

function App(){


    return (

        <div className='appWrapper'>
            <Header/>
            <NavBar/>
            <div className='appWrapperContent'>
                <Routes>
                    <Route path='dialogs/*' element={<DialogsContainer
                        store={store}
                        // dialogsPage={state.dialogsPage}
                        // newMessageText={state.dialogsPage.newMessageText}
                        // dispatch={store.dispatch.bind(store)}
                        // //updateNewMessageText={store.updateNewMessageText.bind(store)}
                    />}/>

                    <Route path='/profile' element={<Profile
                        //store={store}
                        // profilePage={state.profilePage}
                        // newPostText={state.profilePage.newPostText}
                        // dispatch={store.dispatch.bind(store)}

                        // addPost={store.addPost.bind(store)}
                        // updateNewPostText={store.updateNewPostText.bind(store)}
                    />}/>

                    <Route path='/music' element={<Music/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
