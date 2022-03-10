import React from "react";
import images from "../../Assets/ExportImages";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./costcalculater.scss";

export default function CostCalculater() {
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
      <div className="estimate-cost  ">
        <div className="container">
          <h1 className="text-white text-left">ESTIMATE COST</h1>
          <div className="container">
            <table>
              <tr>
                <th>Site Dimension (Length in ft)</th>
                <th>Site Dimension (Width in ft)</th>
              </tr>
              <tr>
                <td>
                  <div class="dropdown">
                    <button
                      class="btn text-white dropdown-toggle pl-0"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Site Dimension (Width in ft)
                      <img src={images.arrodown} alt="arrowdown"></img>
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="dropdown">
                    <button
                      class="btn text-white dropdown-toggle pl-0"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Site Dimension (Width in ft)
                      <img src={images.arrodown} alt="arrowdown"></img>
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-0"></td>
                <td className="cost-goto border-0">CALCULATE COST
                <img src={images.rightarrow} alt=""></img>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
