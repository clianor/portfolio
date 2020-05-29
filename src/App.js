import React from "react";
import Sidebar from "./components/sidebarComponents/Sidebar";
import Content from "./components/contentComponents/Content";
import TopButton from "./components/TopButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content />
      <TopButton />
    </div>
  );
}

export default App;
