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
import {store} from "./redux/reduxStore";

// type AppPropsType = {
//     store: StoreType
// }

function AppWithRedux () {

    const state = store.getState()

    return (

        <div className='appWrapper'>
            <Header/>
            <NavBar/>
            <div className='appWrapperContent'>
                <Routes>
                    <Route path='dialogs/*' element={<Dialogs
                        dialogsPage={state.dialogsPage}
                        newMessageText={state.dialogsPage.newMessageText}
                        dispatch={store.dispatch.bind(store)}
                        //updateNewMessageText={store.updateNewMessageText.bind(store)}
                    />}/>

                    <Route path='/profile' element={<Profile
                        profilePage={state.profilePage}
                        newPostText={state.profilePage.newPostText}
                        dispatch={store.dispatch.bind(store)}

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

export default AppWithRedux
