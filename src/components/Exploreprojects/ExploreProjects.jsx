import React from "react";
import images from "../../Assets/ExportImages";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import './exploreprojects.scss'

export default function ExploreProjects() {
  return (
    <div >
      <Navbar isDark/>
      <div className="ep-section">
         
          <div className="container">
          <h2 className="text-left text-white">EXPLORE PROJECTS</h2>
          <div className="ep-block "  >
          {
            projects.map(obj=>
          
             <div className="projects">
                <img src={obj.image} alt="" className=""></img>
               <h5 className="sidebar-menu-name">{obj.title1}<br/>{obj.title2}</h5>
               <h6>{obj.title3}</h6>
               <p>{obj.description}</p>
            </div>
           )
         
             }
               </div>  
          </div>

           
        </div>
      <Footer />
    </div>
  );
}
const projects=[
    {image:images.projects1, title1:"NEELADRI",title2:"NAGAR",title3:"BANGALORE",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."},
    {image:images.projects2, title1:"FERN",title2:"PARADISE",title3:"BANGALORE",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."},
    {image:images.projects3, title1:"CHANDAPURA",title2:"",title3:"BANGALORE",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."},
    {image:images.projects1, title1:"NEELADRI",title2:"NAGAR",title3:"BANGALORE",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."},
    {image:images.projects2, title1:"FERN",title2:"PARADISE",title3:"BANGALORE",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."},
    {image:images.projects3, title1:"CHANDAPURA",title2:"",title3:"BANGALORE",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."},
    {image:images.projects1, title1:"NEELADRI",title2:"NAGAR",title3:"BANGALORE",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."},
    {image:images.projects2, title1:"FERN",title2:"PARADISE",title3:"BANGALORE",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."},
    {image:images.projects3, title1:"CHANDAPURA",title2:"",title3:"BANGALORE",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."},
   
   
]