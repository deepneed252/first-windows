import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';


const App = (props) => {
    return (

        <div className="app-wrapper">
            <Header />
            <Sidebar />
            <main className="content">
                <Route path='/profile'
                    render={() => <Profile
                        state={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText} />} />
                <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage} />} />

                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
            </main>
        </div>

    );
}

export default App;