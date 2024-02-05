import React from "react";

const KeyNoteSpeakers = () => {
  return (
    <section id="speakers" className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <p className="comn-hdg wow fadeInLeft">Keynote Speakers</p>
            <div className="team-grids">
              {/* first  */}
              <div className="galrypage">
                <div className="grid gallery-items">
                  <div className="img-holder">
                    <img
                      src="assets/DrPrasenjit.png"
                      className="img-thumbnail"
                    />
                    <div className="b-wrapper col-sm-12">
                      <span className="name">Dr. Prasenjit Dey</span>
                      <span className="designation">
                        {" "}
                        Assistant Professor,Department of Computer Science and
                        Engineering, National Institute of Technology Rourkela,
                        India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* second  */}
              <div className="galrypage">
                <div className="grid gallery-items">
                  <div className="img-holder">
                    <img src="assets/DrNikhil.png" className="img-thumbnail" />
                    <div className="b-wrapper col-sm-12">
                      <span className="name">Dr. Nikhil Sikri</span>
                      <span className="designation">
                        {" "}
                        Co-Founder & CEO at Zolo Bengaluru,karnataka - India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* third  */}
              <div className="galrypage">
                <div className="grid gallery-items">
                  <div className="img-holder">
                    <img src="assets/DrMousumi.png" className="img-thumbnail" />
                    <div className="b-wrapper col-sm-12">
                      <span className="name">Dr. Mousumi Senguptay</span>
                      <span className="designation">
                        {" "}
                        M.A. (TVU, U.K.), GradIPD (IPD, U.K.), Ph.D. (IIT,
                        Kharagpur) Chairperson - SDM Research Center for
                        Management Studies (SDM RCMS) Editor-in-Chief- SDMIMD
                        Journal of Management
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyNoteSpeakers;
