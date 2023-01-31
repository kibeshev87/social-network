import React from 'react';
import './App.css';
import {Header} from "./components/headers/Header";
import {NavBar} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/myPosts/Profile";
import {DialogsPage} from "./components/dialogs/DialogsPage";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {store} from "./redux/reduxStore";


const App = () => {

   let state = store.getState()

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className='appWrapperContent'>
                    <Route path='/profile'
                           render={() => <Profile posts={state.profilePage.posts} />}/>
                    <Route path='/dialogs'
                           render={() => <DialogsPage dialogs={state.dialogsPage.dialogs}
                                                      messages={state.dialogsPage.messages}
                           />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
