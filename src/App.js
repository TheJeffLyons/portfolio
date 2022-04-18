import React from "react";
import { Route, Routes} from "react-router-dom";
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
   
    <div className="App">
    <div>
          <Home />
        </div>
      <div className="top-container">
       
     
        
          <Routes basename="${portfolio}">
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
   
  );
}

export default App;
