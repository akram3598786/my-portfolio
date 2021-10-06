
// import React from 'react';
 import Header from "./Components/header/header";
 import Intro from "./Components/intro/intro";
 import About from "./Components/about/about";
 import Contact from "./Components/contact/contact";
 import Menu from "./Components/header/menu";
 import Recent_works from "./Components/Recent-works/recent_works";
 import "./app.scss"
 import { useState } from "react";



function App() {

  const [menuOpen, setmenuOpen] = useState(false)
 
  return ( 

    <>

    <div className="app">
       <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>   
       <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>

    <div className="sections">
    
        <Intro/>   
        <About/>  
        <Recent_works/>
        <Contact/>   
    </div>
    </div>
    </>
  
  );
}


export default App;
