import React from 'react'
import { Link } from 'react-router-dom';
import images from '../../Assets/ExportImages';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './homepage.scss'
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

export default function HomePage() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  return (
    <div className="home-page">
    <Navbar/>
     <div className="home-section" ref={scrollRef}>
       <div className="banner container-fluid ">
       
           <div className=" banner-left">
             <h6 className="text-left">SHAPING THE<br></br> IDEAL SPACE<br></br> FOR YOU</h6>
             <button className="btn btn-banner"><img src={images.contacticon} className="mr-2" alt="c "></img> Contact Us</button>
           </div>
          
          
       </div>
       <div className="offer">
       
         <div className=" offer-left">
          <h6 className="">WHAT WE <br></br>OFFER</h6>
          <div className="offer-left-section  ">
             <img src={images.gotoicon} className="mr-2" alt="goto icon "></img>
             <Link to="/services" className="">  <p >READ<br></br> FULL<br></br> ARTICLE</p></Link> 
           </div>
           <p className="offer-left-subtext">WHAT WE ARE OFFER</p>
            </div>
         <div className=" offer-right">
           <p className="offer-right-text1">RESIDENTIAL CONSTRUCTION</p>
           <p className="offer-right-text2">REMODELING & RENOVATION</p>
           <p className="offer-right-text3">INTERIOR DECOR</p>
         </div>
      
       </div>
       <div className="packages">
      
         <div className="packages-left ">
          <h6 className="text-left ">CLASSIC</h6>
          <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <h5 className="text-left ">₹ 1550 / Sq.ft (Incl.GST)</h5>
          <div className="text-left ">
            <p className="package-title">PREMIUM</p>
            <p className="package-title">SIGNATURE</p>
            <p className="package-title">OPULENT</p>
            <p className="package-title">ELITE</p>
            <p className="package-title">ETERNA</p>
            <p className="package-title">PREMIUM</p>
          </div>
           
            </div>
         <div className="packages-right">
        <h6 className="">OUR <br></br>PACKAGES<br></br>FOR YOU</h6>
          <div className="packages-left-section  ">
             <img src={images.gotoicon} className="mr-2" alt="goto icon "></img>
             <Link to="/packages">   <p >READ<br></br> FULL<br></br> ARTICLE</p></Link>
           </div>
           
         </div>
      
       </div>
       <div className="how-does-work">
         <h1 className="text-left">HOW DOES<br></br>IT WORK</h1>
         <p>STEP 1</p>
         <h2 className="text-left mt-2">SUBMIT DETAILS</h2>
         <p className="work-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <div className="d-flex align-items-center">
           <p className="mb-0 pr-2 ">01</p>
           <hr className="work-line"></hr>
           <p className="mb-0 pl-2">02</p>
         </div>
       </div>
       <div className="why-choose-buildryt">
         
             <div className="wcb-left">
             <p className="text-left">We use the escrow-style model, which means that your money is secure with us and not released to the contractor until the conditions agreed upon between you and the contractor as per the contract are met and to your satisfaction.</p>
             <ul>
               <li><p>Your money is 100% secure.</p></li>
               <li><p>Until the milestone is met, your money is not released.</p></li>
             </ul>
             </div>

             <div className="wcb-right">
             <h6 className="">WHY CHOOSE <br></br>BUILDRYT</h6>
             <div className="wcb-left-section  ">
             <img src={images.gotoicon} className="mr-2" alt="goto icon "></img>
             <p >READ<br></br> FULL<br></br> ARTICLE</p>
             </div>

             </div>
          
        
       </div>
       <div className="testimonial">
        
             <div className="t-left ">
               <h1>TESTIMONIAL</h1>
               <p>Chandapura, Bangalore</p>
               <h4>MR. NANJA REDDY</h4>
               <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             </div>
             <div className="t-right">
               <img src={images.testimonial} alt="testimonial" className="img-fluid"></img>
               
             </div>
         
        
       </div>
     </div>
    <Footer/>
   </div>

  )
}
