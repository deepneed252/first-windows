import React from 'react';
import s from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <nav>
                <ul>
                    <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                    <li><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                    <li><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;