import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import HeaderContainer from './components/Header/HeaderContainer';


function App(props) {
    return (
        <BrowserRouter>
            <div className='app'>

                <section className='header'>
                    <HeaderContainer />
                </section>

                <section className='sidebar'>
                    <SidebarContainer />
                </section>

                <section className='content'>
                    {/* <Routes> */}
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                        <Route path='/dialogs' render={() => <DialogsContainer />} />
                        <Route path='/users' render={() => <UsersContainer /> } />
                        <Route path='/news' Component={News} />
                        <Route path='/music' Component={Music} />
                        <Route path='/settings' Component={Settings} />
                    {/* </Routes> */}
                </section>

            </div>
        </BrowserRouter>

    );
}



export default App;
