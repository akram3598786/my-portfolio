
import React from 'react'
import "./intro.scss"


export default function Intro() {
    return (

        <>
       
        <div className="intro" id="intro">
            <div className="left">
              <div className="profile">

                  <img src="https://png2.cleanpng.com/sh/00467606b3fc12d3d68fc600fc31d81c/L0KzQYi4UsE3N2JqTJGAYUO4QIXpVPI5PZM8TZCANEezQ4KCUME2OWQ5SqY5NUK6RYa4TwBvbz==/5a3504b4b85b75.5470319015134240527551.png" alt="Profile loading" />

              </div>
       
           </div>
            


            <div className="right">
                <div className="btn_section">
            <button type="button" class="btn btn-warning">Hire Me</button>
            <button type="button" class="btn btn-warning">Download CV</button>
            </div>
             <div className="wrapper">  
            <h3>HI There, I am</h3>
            <h1>Akram</h1>
            <h3> <span className="danger text-warning">Front End Developer</span></h3> 
            <a href="#intro">
                <img src="assets/arrow-1.png" alt="loading"/>
                </a>


            </div>  
            </div>
            </div>
           
            </>
           
    )
}
