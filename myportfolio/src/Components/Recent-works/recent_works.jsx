
import React from 'react'
import "./recent_works.scss"
import project_img from "../assets/project-7.png"


export const recent_works = () => {
    return (
      <>
      <h3 className="text-center ">Recent Works </h3>
 <div className="recent_works" id="recent_works">
              

 <div className="container project_box">

     <div class="card mb-3 project_card " >
  <div class="row g-0 left" >
    <div class="col-md-5">
      <img src={project_img} class="img-fluid rounded-start project_img" alt="..."/>
    </div>  
    <div class="col-md-7 right">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  </div>
</div>
    


{/* 
             <div className="container card" >
           
                <div className="project_box p-5" >
                    <div className="left">left </div>
                    <div className="right">right</div>
                </div> */}

           
           
      
        </div>

        </>
    )
}

export default recent_works;
