import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';


function App(props) {
    return (
        <BrowserRouter >
            <div className='app'>

                <section className='header'>
                    <Header />
                </section>

                <section className='sidebar'>
                    <SidebarContainer store={props.store} />
                </section>

                <section className='content'>
                    <Routes>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
                        <Route path='/news' Component={News} />
                        <Route path='/music' Component={Music} />
                        <Route path='/settings' Component={Settings} />
                    </Routes>
                </section>

            </div>
        </BrowserRouter>

    );
}



export default App;
