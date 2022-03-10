import React from 'react'
import images from '../../Assets/ExportImages'
import './footer.scss'


export default function Footer() {
  return (
    <div className="footer-section">
      <div className="container">
          <div className="row f-first-row ">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-w-logo">
                  <img src={images.logo} alt="footer logo"></img>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12">
                <p className="footer-text">
                Send us a message, or call us for a quote. Use our contact form to tell us more about your project, and we will connect you with the right design/build services to fit your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>   
              </div>
          </div>
          <div className="row mt-3">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                 <h6 className="footer-title">COMPANY</h6>
                 <ul>
                     <li className=""><a href="#">Home</a></li>
                     <li><a href="#">FAQ’s</a></li>
                     <li><a href="#">Partner Login</a></li>
                     <li><a href="#">Refer Friends</a></li>
                     <li><a href="#">Privacy Policy</a></li>
                     <li><a href="#">Terms & Condition</a></li>
                 </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                 <h6 className="footer-title">SUPPORT</h6>
                <ul>
                   <li>
                   <p>Customer Support<br></br>
                   <a href="mailto:care@buildryt.com">care@buildryt.com</a>
                   </p>
                   </li>
                   <li>
                   <p>Join us as a Contractor or an Architect <br></br>
                   <a href="mailto:partners@buildryt.com">partners@buildryt.com</a>
                   </p>
                   </li>
                   <li>
                   <p>General Queries & Information <br></br>
                   <a href="mailto:info@buildryt.com">info@buildryt.com</a>
                   </p>
                   </li>
                </ul>
             </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                 <h6 className="footer-title">CONTACT</h6>
                 <ul>
                     <li>
                         <p>Email : <a href="mailto:info@buildryt.com"><b>info@buildryt.com</b></a></p>
                     </li>
                     <li>
                         <p>Phone : <a href="tel:+91 905 7474 905"><b>+91 905 7474 905</b></a></p>
                     </li>
                     <li>
                         <p>Timings:<b> Mon - Sat, 10 am to 6 pm</b></p>
                     </li>
                 </ul>
               </div>
            
          </div>

      </div>
        
    </div>
  )
}
