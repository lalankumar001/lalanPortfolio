import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Pages/About/About"
// import Project from "./Pages/Project"
// import Work from './pages/Work/Work'
import "./App.css";
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/About" Component={About}/>
        {/* <Route exact path="/Skills" Component={Work}/>
        <Route exact path="/Work" Component={Skills}/>
        <Route exact path="/Contact" Component={Contact}/> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
