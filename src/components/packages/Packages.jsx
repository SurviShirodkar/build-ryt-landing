import React from "react";
import { Link } from "react-router-dom";
import images from "../../Assets/ExportImages";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./packages.scss";

export default function Packages() {
  return (
    <div className="packages">
      <Navbar />
      <div className="packages-section">
        <div className="package-banner">
          <div className="row mr-0">
            <div className="col-lg-6 banner-left"></div>
            <div className="col-lg-6 banner-right">
              <h6 className="text-left">
                OUR PACKAGES <br></br>FOR YOU
              </h6>
              <div className="scroll-down">
                <img
                  src={images.scrolldown}
                  className="img-responsive"
                  alt="scroll-down icon"
                ></img>
                <p>scroll down</p>
              </div>
            </div>
          </div>
        </div>
        <div className="compare-package my-5">
          <div className="container">
            <h2 className="text-left my-5 ">COMPARE PACKAGES</h2>
            <div className="row mt-2">
              <div className="col-lg-4">
                <div class="dropdown">
                  <button
                    class="btn  dropdown-toggle mx-auto px-4"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div class="">
                      CLASSIC <br></br>
                      <span>₹ 1550 / Sq.ft (Incl.GST)</span>
                    </div>
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#" value="action">
                      Action
                    </a>
                    <a class="dropdown-item" href="#" value="another">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="dropdown">
                  <button
                    class="btn  dropdown-toggle mx-auto px-4"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div class="">
                      <div class="">SELECT PLAN</div>
                    </div>
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#" value="action">
                      Action
                    </a>
                    <a class="dropdown-item" href="#" value="another">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <Dropdown />
              </div>
            </div>
            {/* {
           packagesBlock.map(obj=>
                <Link className="sidebar-text"  to={`/${obj.route}`}  >
            <div className="menu">
                <img src={obj.icon} alt="image" className="menu-image"></img>
               <h5 className="sidebar-menu-name">{obj.listname}</h5>
            </div></Link>)
           
             }   */}
          </div>
          <div className="container">
            {" "}
            <h2 className="text-left my-5 ">EXPLORE PACKAGES</h2>
          </div>

          <div className="explore-block mb-5 pb-5">
            {icon.map((obj) => (
              <div className="explore">
                <img src={obj.image} alt=""></img>
                <h5 className="">{obj.title}</h5>
                 <Dropdown text={obj.subtext}/>
                <div className="border-top w-100"></div>
                {obj?.prop?.map((res) => (
                 <div className=" property">
                  
                  <p className="mb-0 mt-2">{res.prop1}</p>
                  <p className="mb-0 ">{res.prop2}</p>
                  <p className="mb-0 ">{res.prop3}</p>
                  <p className="mb-0 ">{res.prop4}</p>
                  <p className="mb-0 ">{res.prop5}</p>
                  
                  
                 </div>
             
            ))}
             
              {obj?.dropdownlist?.map((res) => (
                
<>
                  <Dropdown text={res.dl1}/>
                  <Dropdown text={res.dl2}/>
                  <Dropdown text={res.dl3}/>
                  <Dropdown text={res.dl4}/>
                  <Dropdown text={res.dl5}/>
                  <Dropdown text={res.dl6}/>
                  <Dropdown text={res.dl7}/>
                  </>            
             
            ))}
               
              </div>
            ))}
          </div>
          <div className="exp-package"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
function Dropdown({text}) {
  return (
    <div class="dropdown">
      <button
        class="btn  dropdown-toggle "
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div class="">
          <div class="">{text}</div>
        </div>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" value="action">
          Action
        </a>
        <a class="dropdown-item" href="#" value="another">
          Another action
        </a>
        <a class="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
  );
}

const icon = [
  {
    image: images.classicblack,
    title: "CLASSIC",
    subtext:"DESIGN & DRAWING",
    prop:[{
      prop1:"2D Floor Plan",
      prop2:"Structural Designing",
      prop3:"3D Elevation Design",
      prop4:"",
      prop5:"",
      prop6:"",
    }],
    dropdownlist:[
      {
        dl1:"STRUCTURE",
        dl2:"KITCHEN",
        dl3:"BATHROOM",
        dl4:"FLOORING",
        dl5:"DOORS & WINDOW",
        dl6:"PAINTING",
        dl7:"ELECTRICALS",
        dl8:"ADDITIONAL INCLUSIONS",
      }
    ]
  },
  {
    image: images.premiumblack,
    title: "PREMIUM",
    subtext:"DESIGN & DRAWING",
    prop:[{
      prop1:"2D Floor Plan",
      prop2:"Structural Designing",
      prop3:"3D Elevation Design",
      prop4:"Electrical Drawing",
      prop5:" ",
      prop6:" ",
    }],
    dropdownlist:[
      {
        dl1:"STRUCTURE",
        dl2:"KITCHEN",
        dl3:"BATHROOM",
        dl4:"FLOORING",
        dl5:"DOORS & WINDOW",
        dl6:"PAINTING",
        dl7:"ELECTRICALS",
        dl8:"ADDITIONAL INCLUSIONS",
      }
    ]
  },
  
  {
    image: images.signatureblack,
    title: "SIGNATURE",
    subtext:"DESIGN & DRAWING",
    prop:[{
      prop1:"2D Floor Plan",
      prop2:"Structural Designing",
      prop3:"3D Elevation Design",
      prop4:"Electrical Drawing",
      prop5:"VR Experience ",
      prop6:"360 degree Renders ",
    }],
    dropdownlist:[
      {
        dl1:"STRUCTURE",
        dl2:"KITCHEN",
        dl3:"BATHROOM",
        dl4:"FLOORING",
        dl5:"DOORS & WINDOW",
        dl6:"PAINTING",
        dl7:"ELECTRICALS",
        dl8:"ADDITIONAL INCLUSIONS",
      }
    ]
  },
  {
    image: images.classicblack,
    title: "OPULENT",
    subtext:"DESIGN & DRAWING",
    prop:[{
      prop1:"2D Floor Plan",
      prop2:"Structural Designing",
      prop3:"3D Elevation Design",
      prop4:"Electrical Drawing",
      prop5:" ",
      prop6:" ",
    }],
    dropdownlist:[
      {
        dl1:"STRUCTURE",
        dl2:"KITCHEN",
        dl3:"BATHROOM",
        dl4:"FLOORING",
        dl5:"DOORS & WINDOW",
        dl6:"PAINTING",
        dl7:"ELECTRICALS",
        dl8:"ADDITIONAL INCLUSIONS",
      }
    ]
  },
  
  {
    image: images.classic,
    title: "OPULENT",
    subtext:"DESIGN & DRAWING",
    prop:[{
      prop1:"2D Floor Plan",
      prop2:"Structural Designing",
      prop3:"3D Elevation Design",
      prop4:"Electrical Drawing",
      prop5:" ",
      prop6:" ",
    }],
    dropdownlist:[
      {
        dl1:"STRUCTURE",
        dl2:"KITCHEN",
        dl3:"BATHROOM",
        dl4:"FLOORING",
        dl5:"DOORS & WINDOW",
        dl6:"PAINTING",
        dl7:"ELECTRICALS",
        dl8:"ADDITIONAL INCLUSIONS",
      }
    ]
  },
  
];

