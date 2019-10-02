import React from 'react';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import TopButton from "./components/TopButton";
import './App.css';

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
