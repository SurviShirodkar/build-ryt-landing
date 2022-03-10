import React from "react";
import images from "../../Assets/ExportImages";
import BlogPage from "../Blog/BlogPage";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./bloglist.scss";

export default function BlogList() {
  return (
    <div className="blog-list">
      <Navbar />
      <div className="blog-list-section container">
        <div className="row my-5">
          {toptags.map((obj) => (
            <div className="tag-block">
              <h5 className="tag-text">{obj.name}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row mb-5 ">
          <div className="col-lg-4">
            <BlockOne />
            <BlockOne image={images.block1} />
          </div>
          <div className="col-lg-4">
            <BlockOne image={images.block2} />
            <BlockOne />

            <BlockOne image={images.block2} />
          </div>
          <div className="col-lg-4">
            <BlockOne image={images.block1} />
            <BlockOne />

            <BlockOne />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
const toptags = [
  { name: "CONSTRUCTION" },
  { name: "DEVELOPMENT" },
  { name: "CONSTRUCTION" },
  { name: "INTERIOR" },
  { name: "DEVELOPMENT" },
  { name: "CONSTRUCTION" },
  { name: "INTERIOR" },
  { name: "CONSTRUCTION" },
];
function BlockOne({ image }) {
  return (
    <div className="block1 text-left mt-3">
      {image && <img src={image} className="img-fluid" alt="block1"></img>}
      <h6 className="text-left title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h6>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis...
      </p>
      <p className="hashtag">#CONSTRUCTION #INTERIOR</p>
      <hr />
    </div>
  );
}
