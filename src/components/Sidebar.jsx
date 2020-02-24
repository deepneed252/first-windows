import React from 'react';

const Sidebar = () => {
    return (
        <sidebar className="sidebar">
            <nav>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                </ul>
            </nav>
        </sidebar>
    );
}

export default Sidebar;