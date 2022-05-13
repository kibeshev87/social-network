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
import state, {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";


const App = () => {

    return (
        <div className='appWrapper'>
            <Header/>
            <NavBar/>
            <div className='appWrapperContent'>
                <Routes>
                    <Route path='dialogs/*' element={<Dialogs
                        newMessageText={state.dialogsPage.newMessageText}
                        dialogsPage={state.dialogsPage}
                        updateNewMessageText={updateNewMessageText}
                        addMessage={addMessage}/>}/>

                    <Route path='/profile' element={<Profile
                        profilePage={state.profilePage}
                        newPostText={state.profilePage.newPostText}
                        addPost={addPost}
                        updateNewPostText={updateNewPostText}
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
