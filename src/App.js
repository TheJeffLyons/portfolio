import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
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
    <BrowserRouter basename="portfolio">
   
    <div className="App">
    <div>
          <Home />
        </div>
      <div className="top-container">
     
        
          <Routes >
          <Route exact path="/" element={<Landing />}/>
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
   
  </BrowserRouter>
  );
}

export default App;

