import React from "react";
import images from "../../Assets/ExportImages";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./ccexpanded.scss";

export default function CCExpanded() {
  return (
    <div>
      <Navbar isDark />
      <div className="cost-calculation-section">
        <div className="container">
          <div className="row costcalcu-block mr-0">
            <div className="col-lg-6"></div>
            <div className="col-lg-6 cost-right">
              <p>
                Fill out the details of your plot below to get an fair estimate
                of the construction costs. For a complete and accurate price,
                please contact our consultants.
              </p>
              <h3>
                COST
                <br /> ESTIMATOR
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="cc-block">
        <div className=" container">
          <div className=" cc-block my-5">
            {Category.map((obj) => (
              <div className="block">
                <img src={obj.image} alt=""></img>
                <h5 className="tag-text">{obj.name}</h5>
                <p>{obj.subtext}</p>
              </div>
            ))}
          </div>
          <hr className="hr-line" />
          <h2 className="text-left text-white  ">HIGHLIGHTS</h2>
          <div className="highlights">
            {Categoryproperties.map((obj) => (
              <div className="block">
                <li>{obj.prop1}</li>
                <li>{obj.prop2}</li>
                <li>{obj.prop3}</li>
              </div>
            ))}
          </div>

          <h2 className="text-left text-white mt-5  ">PRICE</h2>
          <hr className="hr-line" />
          <div className="d-flex justify-space-between flex-wrap">
            {Categoryprice.map((obj) => (
              <div className="block">
                <p>{obj.prop1}</p>
              </div>
            ))}
          </div>
          <div className="d-flex direction-col"></div>
          <h2 className="text-left text-white mt-5  ">COST BREAKUP</h2>
          <hr className="hr-line" />
          {[1, 2, 3, 4].map((obj) => (
            <div className="d-flex flex-wrap ">
              {costbreakup.map((obj) => (
                <div className="block">
                  <p>{obj.prop1}</p>
                  <p className="font-weight-bold mt-0">{obj.prop2}</p>
                </div>
              ))}
            </div>
          ))}
           <h2 className="text-left text-white mt-5  ">TOTAL COST</h2>
          <hr className="hr-line" />
          <div className="d-flex justify-space-between flex-wrap">
            {totalcost.map((obj) => (
              <div className="block">
                <p className="font-weight-bold">{obj.prop1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
const Category = [
  {
    name: "Classic",
    subtext:
      "A plan that speaks for quality and affordability along with the best design ideas unlike any out there .",
    image: images.classic,
  },
  {
    name: "Classic",
    subtext:
      "A plan that speaks for quality and affordability along with the best design ideas unlike any out there .",
    image: images.premium,
  },
  {
    name: "Classic",
    subtext:
      "A plan that speaks for quality and affordability along with the best design ideas unlike any out there .",
    image: images.signature,
  },
  {
    name: "Classic",
    subtext:
      "A plan that speaks for quality and affordability along with the best design ideas unlike any out there .",
    image: images.opulent,
  },
  {
    name: "Classic",
    subtext:
      "A plan that speaks for quality and affordability along with the best design ideas unlike any out there .",
    image: images.elite,
  },
];
const Categoryproperties = [
  {
    prop1: "High-end options",
    prop2: "Attention to detail",
    prop3: "Expansive space",
  },
  {
    prop1: "High-end options",
    prop2: "Attention to detail",
    prop3: "Expansive space",
  },
  {
    prop1: "High-end options",
    prop2: "Attention to detail",
    prop3: "Expansive space",
  },
  {
    prop1: "High-end options",
    prop2: "Attention to detail",
    prop3: "Expansive space",
  },
  {
    prop1: "High-end options",
    prop2: "Attention to detail",
    prop3: "Expansive space",
  },
];

const Categoryprice = [
  {
    prop1: "₹ 2150 / Sq.ft (Incl.GST)",
  },
  {
    prop1: "₹ 2150 / Sq.ft (Incl.GST)",
  },
  {
    prop1: "₹ 2150 / Sq.ft (Incl.GST)",
  },
  {
    prop1: "₹ 2150 / Sq.ft (Incl.GST)",
  },
  {
    prop1: "₹ 2150 / Sq.ft (Incl.GST)",
  },
];
const totalcost = [
    {
      prop1: "₹ 19,93,050",
    },
    {
      prop1: "₹ 19,93,050",
    },
    {
      prop1: "₹ 19,93,050",
    },
    {
      prop1: "₹ 19,93,050",
    },
    {
      prop1: "₹ 19,93,050",
    },
  ];

const costbreakup = [
  {
    prop1: "Built up Cost: 1 x -177 Sq.ft",
    prop2: " ₹ 2,74,350",
  },
  {
    prop1: "No Of Floors: 2 x 363 Sq.ft",
    prop2: " ₹ 15,60,900",
  },
  {
    prop1: "No Of Floors: 2 x 363 Sq.ft",
    prop2: " ₹ 15,60,900",
  },
  {
    prop1: "No Of Floors: 2 x 363 Sq.ft",
    prop2: " ₹ 15,60,900",
  },
  {
    prop1: "No Of Floors: 2 x 363 Sq.ft",
    prop2: " ₹ 15,60,900",
  },
];
