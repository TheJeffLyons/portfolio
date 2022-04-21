import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import "./App.css";
import Header from "./components/Header"
import BioCard from "./components/BioCard";
import TopBanner from "./components/TopBanner";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <TopBanner/>
        </div>

        <div className="App">

        <div className="app-left">
        <BioCard />
        </div>

        <div className="app-middle">
          <Header />
           <div className="middle-container">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="aboutme" exact element={<AboutMe />} />
            <Route path="education" exact element={<Education />} />
            <Route path="portfolio" exact element={<Portfolio />} />
            <Route path="contact" exact element={<Contact />} />
          </Routes>
        </div>
        </div>

        <div className="app-right">
          <Footer />
        </div>

        </div>
       

      </div>
    </BrowserRouter>
  );
}

export default App;
