import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


function App(props) {
    return (
        <BrowserRouter >
            <div className='app'>

                <section className='header'>
                    <Header />
                </section>

                <section className='sidebar'>
                    <Sidebar state={props.state.sidebar} />
                </section>

                <section className='content'>
                    <Routes>
                        <Route path='/profile' element={<Profile dispatch={props.dispatch} profilePage={props.state.profilePage}/>} />
                        <Route path='/dialogs/*' element={<Dialogs dispatch={props.dispatch} dialogsPage={props.state.dialogsPage} />} />
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
