import React from 'react';
import './App.css';
import {Header} from "components/headers/Header";
import {NavBar} from "components/navBar/NavBar";
import {Profile} from "components/profile/myPosts/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "components/news/News";
import {Music} from "components/music/Music";
import {DialogsPageContainer} from "components/dialogs/DialogsPageContainer";
import {UsersContainer} from "components/users/UsersContainer";


const App = () => {

    /*let state = store.getState()*/

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className='appWrapperContent'>
                    <Route path='/profile'
                           render={() => <Profile/>}/>

                    <Route path='/dialogs'
                           render={() => <DialogsPageContainer/>}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                </div>

            </div>
        </BrowserRouter>
    )
}


export default App
