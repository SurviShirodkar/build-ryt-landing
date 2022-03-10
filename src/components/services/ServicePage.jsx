import React from "react";
import "./servicepage.scss";
import images from "../../Assets/ExportImages";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

export default function ServicePage() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  return (
    <div className="servicePage" >
      <Navbar />
      <div className="service-section" ref={scrollRef} >
        <div className="banner container">
          <div className="row">
            <div className="col-6 banner-left">
              <h6 className="text-left">
                WHAT WE ARE <br></br>OFFERING
              </h6>
            </div>
            <div className="col-6 banner-right">
              <img
                src={images.scrolldown}
                className="img-responsive"
                alt="scroll-down icon"
              ></img>
              <p>scroll down</p>
            </div>
          </div>
        </div>
        <div className="fullbanner-section">
          <img
            src={images.servicebanner}
            className="img-responsive"
            alt="banner"
          ></img>
        </div>
        <div className="grid-section1">
          <div className="row mr-0">
            <div className="col-lg-6 section1-left">
              {/* <img src={images.serviceimg} className="img-fluid" alt="left"></img> */}
            </div>
            <div className="col-lg-6 ">
              <div className="section1-right">
                <img
                  src={images.right}
                  alt="construction"
                  className="const-img-right"
                ></img>
                <h1>
                  RESIDENTIAL <br></br>CONSTRUCTION
                </h1>
                <div>
                  <div className="d-flex mt-4">
                    <div className="col-lg-7 grid-border-left">
                      <ul>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Independent Homes
                          </p>
                        </li>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            High End Luxury Homes
                          </p>
                        </li>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Flat or Apartment
                          </p>
                        </li>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Other Services
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-5 grid-border-left">
                      <ul>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Farm House
                          </p>
                        </li>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Guest House
                          </p>
                        </li>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Villa
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p className="subtext p-0">RESIDENTIAL CONST</p>
            </div>
          </div>
        </div>
        <div className="grid-section2">
          <div className="row mr-0">
            <div className="col-lg-6 ">
              <div className="section2-left">
                <img
                  src={images.serviceleft}
                  alt="construction"
                  className="const-img-left"
                ></img>
                <h1>
                  COMMERCIAL<br></br>CONSTRUCTION
                </h1>
                <div>
                  <div className="d-flex mt-4">
                    <div className="col-lg-7 grid-border-left">
                      <ul>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Construction complex
                          </p>
                        </li>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Buildings services
                          </p>
                        </li>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Corporate office services
                          </p>
                        </li>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Showrooms services
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-5 grid-border-left">
                      <ul>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Farm House
                          </p>
                        </li>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Guest House
                          </p>
                        </li>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Villa
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p className="subtext p-0">COMMERCIAL CONST</p>
            </div>
            <div className="col-lg-6 section2-right">
              {/* <img src={images.serviceimg} className="img-fluid" alt="left"></img> */}
            </div>
          </div>
        </div>
        <div className="grid-section3">
          <div className="row mr-0">
            <div className="col-lg-6 section3-left">
              {/* <img src={images.serviceimg} className="img-fluid" alt="left"></img> */}
            </div>
            <div className="col-lg-6 ">
              <div className="section3-right">
                <img
                  src={images.right}
                  alt="construction"
                  className="const-img-right"
                ></img>
                <h1>
                  REMODELING & <br></br>RENOVATION
                </h1>
                <div>
                  <div className="d-flex mt-4">
                    <p className="grid-section3">
                      We not only provide building services, but also the
                      highest quality materials to build a home that will last a
                      lifetime. Quality you deserve, and dependability you can
                      count on. Our Material Catalogue Includes:
                    </p>
                  </div>
                </div>
              </div>
              <p className="subtext p-0">RESIDENTIAL CONST</p>
            </div>
          </div>
        </div>
        <div className="grid-section4">
          <div className="row mr-0">
            <div className="col-lg-6 ">
              <div className="section4-left">
                <img
                  src={images.serviceleft}
                  alt="construction"
                  className="const-img-left"
                ></img>
                <h1>
                  COMMERCIAL<br></br>CONSTRUCTION
                </h1>
                <div>
                  <p className="grid-section4">
                    We work with you to create luxurious yet livable designs for
                    your home, while also acting as your partner in overseeing
                    the design process.<br></br>
                    <br></br>
                    We handle all from the most creative to the most mundane, to
                    ensure that your luxury interior design project runs
                    smoothly and efficiently from beginning to end. After all,
                    design should be enjoyable and inspiring rather than
                    exhausting and overwhelming.
                  </p>
                  <div className="d-flex mt-4">
                    <div className="col-lg-7 grid-border-left">
                      <ul>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Modular Kitchens
                          </p>
                        </li>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            Luxury Home Automation Systems
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-5 grid-border-left">
                      <ul>
                        <li>
                          <p>
                            <img
                              src={images.bullet}
                              className="img-fluid"
                              alt=""
                            ></img>
                            End-to-End Design Service
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p className="subtext p-0">COMMERCIAL CONST</p>
            </div>
            <div className="col-lg-6 section4-right">
              {/* <img src={images.serviceimg} className="img-fluid" alt="left"></img> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
