import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Pages/About/About"
import Project from './Pages/Project/Project'
import Contact from './Pages/Contact/Contact'
import Blog from './Pages/Blog/Blog'
import "./App.css";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/About" Component={About}/>
        <Route exact path="/Work" Component={Project}/>
        <Route exact path="/Project" Component={Project}/>
        <Route exact path="/Contact" Component={Contact}/> 
        <Route exact path="/Blog" Component={Blog}/> 
      </Routes>
 
    </div>
  );
}

export default App;
