import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Ipad from "./pages/Ipad";
import BackToTop from "./components/BackToTop";


function App() {
  return (
    <BrowserRouter>
   <div>
     {/* <BackToTop /> */}
     <Routes>
       <Route path="/" exact element={<Main/>} />
       <Route path="/ipad" exact element={<Ipad/>} />
     </Routes>
   </div>
    </BrowserRouter>
  );
}

export default App;
