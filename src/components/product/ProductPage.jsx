import React from "react";
import images from "../../Assets/ExportImages";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./productpage.scss";

export default function ProductPage() {
  return (
    <div className="product-page-section">
      <Navbar />
      <div className="project-city">
      <h1 className="">BANGALORE</h1>
    
      </div>
      <div className="project-banner">
      <h2>NEELADRI NAGAR</h2>
        <img
          src={images.projectbanner}
          className="img-responsive "
          alt=""
        ></img>
      </div>
      <div className="pp-section my-5">
        <div className="container">
          <div className="row mr-0">
            <div className="col-lg-6 text-left">
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 border-right">
                  <p className="font-weight-bold">SURFACE</p>
                  <p className="text">30 sq meter</p>
                </div>
                <div className="col-lg-4 border-right">
                  <p className="font-weight-bold">DIFFICULTY</p>
                  <div className="diff-block">
                    <img src={images.setting2} alt="Bullet"></img>
                    <img src={images.setting3} alt="Bullet"></img>
                    <img src={images.setting1} alt="Bullet"></img>
                  </div>
                </div>
                <div className="col-lg-4 border-right">
                  <p className="font-weight-bold">BUDGET</p>
                  <p className="text">₹ 19,93,050</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mr-0 living-banner">
        <div className="col-lg-6 left">
          <img
            src={images.livingroom}
            className="img-responsive img1 mt-0"
            alt=""
          ></img>
        </div>
        <div className="col-lg-6 right">
          <p>LIVING ROOM</p>
          <p>BED ROOM</p>
          <p>KITCHEN</p>
          <p>TERRECE</p>
          <p>PARKING</p>
        </div>
      </div>
      <div className="product-page container">
        <div className="gallery">
          <div className="gallery-col1">
            <img
              src={images.gallery1}
              className="img-responsive img1 mt-0"
              alt=""
            ></img>
            <img
              src={images.gallery2}
              className="img-responsive img2"
              alt=""
            ></img>
          </div>
          <div className="gallery-col2">
            <div className="d-flex block1">
              <img
                src={images.gallery3}
                className="img-responsive"
                alt=""
              ></img>
              <img
                src={images.gallery4}
                className="img-responsive"
                alt=""
              ></img>
            </div>
            <div className="row2 block2">
              <p>GALLERY</p>
            </div>
            <img
              src={images.gallery5}
              className="img-responsive block3"
              alt=""
            ></img>
            <div className="d-flex block4">
              <img
                src={images.gallery6}
                className="img-responsive"
                alt=""
              ></img>
              <img
                src={images.gallery7}
                className="img-responsive"
                alt=""
              ></img>
            </div>
          </div>
          <div className="gallery-col3">
            <img
              src={images.gallery1}
              className="img-responsive img1 mt-0"
              alt=""
            ></img>
            <img
              src={images.gallery2}
              className="img-responsive img2"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
