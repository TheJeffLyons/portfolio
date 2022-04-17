import React from "react";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import "./App.css";

function App() {
  return (
    <HashRouter>
    <div className="App">
    <div>
          <Home />
        </div>
      <div className="top-container">
       
     
        
          <Routes>
          <Route path="/" exact element={<Landing />}/>
          <Route path="aboutme" exact element={<AboutMe />}/>
          <Route path="education" exact element={<Education />}/>
          <Route path="portfolio" exact element={<Portfolio />}/>
          <Route path="contact" exact element={<Contact />}/>

          
          </Routes>
          
        
      </div>

      <div className="bottom-container">
        <Footer />
      </div>
    </div>
    </HashRouter>
  );
}

export default App;
