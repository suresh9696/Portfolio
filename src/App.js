import React from "react";
import './index'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import About from "./routes/About";



function App() {
  return (
    <>
   
     <BrowserRouter>
     <Routes>

      <Route path="/"element={<Home/>}/>
      <Route path="/Project"element={<Project/>}/>
      <Route path="/About"element={<About/>}/>
      <Route path="/Contact"element={<Contact/>}/>
      
     </Routes>
     </BrowserRouter>
    
      
     
           
          
   
    </>
  );
}

export default App;
