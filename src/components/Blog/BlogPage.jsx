import React from "react";
import images from "../../Assets/ExportImages";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./blogpage.scss";

export default function BlogPage() {
  return (
    <div className="blog-page">
      <Navbar />
      <div className="blog-section">
        <div className="container">
          <img
            src={images.blogbanner}
            alt="arrow"
            className=" img-responsive "
          ></img>
          <h1 className="text-left my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </h1>
          <div className="row">
            <div className="col-lg-8">
              <p className="text-left  mt-0 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
                ullamcorper sit amet risus. Habitant morbi tristique senectus
                et. Commodo nulla facilisi nullam vehicula. Accumsan sit amet
                nulla facilisi morbi tempus iaculis. Consectetur adipiscing elit
                duis tristique sollicitudin nibh sit amet commodo. Diam
                phasellus vestibulum lorem sed risus ultricies tristique. Nibh
                mauris cursus mattis molestie a iaculis at. Rhoncus aenean vel
                elit scelerisque mauris pellentesque pulvinar pellentesque.
                Placerat vestibulum lectus mauris ultrices. Ac tortor dignissim
                convallis aenean et tortor at risus. Sapien nec sagittis aliquam
                malesuada bibendum arcu vitae elementum curabitur. Blandit massa
                enim nec dui. Vel orci porta non pulvinar neque laoreet
                suspendisse interdum consectetur. Pretium nibh ipsum consequat
                nisl vel pretium lectus. Quisque sagittis purus sit amet
                volutpat consequat mauris nunc congue.<br></br>
                Sit amet nisl purus in mollis nunc. Diam maecenas ultricies mi
                eget mauris pharetra. Eget aliquet nibh praesent tristique. Amet
                volutpat consequat mauris nunc congue nisi. Fermentum posuere
                urna nec tincidunt. Suscipit tellus mauris a diam maecenas sed
                enim ut. Faucibus interdum posuere lorem ipsum dolor. Netus et
                malesuada fames ac turpis. Scelerisque fermentum dui faucibus in
                ornare quam. Metus vulputate eu scelerisque felis imperdiet.
                Feugiat in fermentum posuere urna.
              </p>
              <img
                src={images.blogmid}
                alt="arrow"
                className=" img-responsive "
              ></img>
              <p className="text-left">
                Pellentesque nec nam aliquam sem et tortor consequat id porta.
                Ornare arcu dui vivamus arcu felis. Lorem sed risus ultricies
                tristique nulla aliquet enim tortor at. Convallis a cras semper
                auctor neque. Amet consectetur adipiscing elit duis tristique
                sollicitudin nibh sit. Pellentesque pulvinar pellentesque
                habitant morbi tristique. Eu volutpat odio facilisis mauris sit
                amet. Mi bibendum neque egestas congue quisque. Mus mauris vitae
                ultricies leo integer malesuada nunc vel risus. Nunc mi ipsum
                faucibus vitae.<br/><br/>
                Pulvinar sapien et ligula ullamcorper. Ipsum nunc aliquet
                bibendum enim facilisis gravida neque convallis a. Erat velit
                scelerisque in dictum. Tristique risus nec feugiat in fermentum.
                Mollis nunc sed id semper risus in hendrerit gravida. Varius
                quam quisque id diam vel quam elementum pulvinar. Nisl nunc mi
                ipsum faucibus vitae. Massa tempor nec feugiat nisl pretium
                fusce id velit. Non pulvinar neque laoreet suspendisse interdum
                consectetur libero id faucibus. Viverra ipsum nunc aliquet
                bibendum. Tincidunt arcu non sodales neque sodales ut etiam.
                Cras fermentum odio eu feugiat pretium. Tellus in hac habitasse
                platea. Pretium fusce id velit ut tortor pretium. Facilisis leo
                vel fringilla est ullamcorper eget nulla facilisi.<br/><br/> Id
                consectetur purus ut faucibus pulvinar. Cursus vitae congue
                mauris rhoncus aenean vel elit scelerisque. Nibh sit amet
                commodo nulla facilisi. Sit amet mattis vulputate enim nulla
                aliquet porttitor. Magna etiam tempor orci eu lobortis elementum
                nibh. Curabitur gravida arcu ac tortor. Aenean euismod elementum
                nisi quis eleifend quam adipiscing vitae. A lacus vestibulum sed
                arcu non odio euismod. A arcu cursus vitae congue mauris. Tellus
                molestie nunc non blandit massa enim. Scelerisque varius morbi
                enim nunc faucibus a.
              </p>
            </div>
            <div className="col-lg-4">
                <div className="row">
                    <div className="col-lg-6 ">
                        <h6 className=" blog-block"> CONSTRUCTION</h6>
                    </div>
                    <div className="col-lg-6  ">
                    <h6 className=" blog-block">  DEVELOPMENT</h6>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-6 ">
                        <h6 className=" blog-block"> CONSTRUCTION</h6>
                    </div>
                    <div className="col-lg-6  ">
                   
                    </div>
                </div>
                <div className="blog-blck">
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h6>
                </div>
                <div className="blog-blck">
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h6>
                </div>
                <div className="blog-blck">
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h6>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
