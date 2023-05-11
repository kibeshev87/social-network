import React from 'react';
import './App.css';
import {NavBar} from "components/navBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "components/news/News";
import {Music} from "components/music/Music";
import {DialogsPageContainer} from "components/dialogs/DialogsPageContainer";
import UsersContainer from "components/users/UsersContainer";
import ProfileContainer from "components/profile/myPosts/ProfileContainer";
import HeaderContainer from "components/headers/HeaderContainer";


const App = () => {

    //60 lesson finish

    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <NavBar/>
                <div className='appWrapperContent'>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>

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
