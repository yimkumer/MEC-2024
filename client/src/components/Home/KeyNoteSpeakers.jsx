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
                      <span className="name">
                        <p>Dr. Prasenjit Dey</p>
                      </span>
                      <span className="designation">
                        {" "}
                        <p>
                          Assistant Professor,Department of Computer Science and
                          Engineering, National Institute of Technology
                          Rourkela, India
                        </p>
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
                      <span className="name">
                        <p>Dr. Nikhil Sikri</p>
                      </span>
                      <span className="designation">
                        {" "}
                        <p>
                          Co-Founder & CEO at Zolo Bengaluru,karnataka - India
                        </p>
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
                      <span className="name">
                        <p>Dr. Mousumi Senguptay</p>
                      </span>
                      <span className="designation">
                        {" "}
                        <p>
                          M.A. (TVU, U.K.), GradIPD (IPD, U.K.), Ph.D. (IIT,
                          Kharagpur) Chairperson - SDM Research Center for
                          Management Studies (SDM RCMS) Editor-in-Chief- SDMIMD
                          Journal of Management
                        </p>
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
