import React from "react";
import { BrowserRouter} from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Landing from "./components/Landing";
import "./App.css";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div>
        <Home />
        <Landing />
        <Education />
        <AboutMe/>
        </div>

        <div>
        
        </div>
       

      </div>
    </BrowserRouter>
  );
}

export default App;
