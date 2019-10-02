import React from 'react';
import Profile from "./sidebarComponents/Profile";
import Navigation from "./sidebarComponents/Navigation";

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <Profile />
            <Navigation />
        </div>
    );
};

export default Sidebar;