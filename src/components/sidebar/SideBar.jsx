import React from 'react';
import './sidebar.css'

const nav = [
    {
        displayName: 'Home',
        path: '/home',
    },
    {
        displayName: 'Sevices',
        path: '/sevices',
    },
    {
        displayName: 'Blog',
        path: '/blog',
    },
    {
        displayName: 'Contact',
        path: '/contact',
    },
]
const SideBar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar-nav">
                {nav.map((item, index) => (<li key={index}><a href={item.path}>{item.displayName}</a></li>))}
            </ul>
        </div>
    );
};

export default SideBar;