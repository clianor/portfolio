import React from "react";
import Profile from "./Profile";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Profile />
      <Navigation />
    </div>
  );
};

export default Sidebar;
