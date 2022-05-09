import React from 'react'
import './App.css'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {DialogsPageType, RootStateType} from "./redux/state";


type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {
    return (
        <div className='appWrapper'>
            <Header/>
            <NavBar/>
            <div className='appWrapperContent'>
                <Routes>
                    <Route path='dialogs/*' element={() =>
                        <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
