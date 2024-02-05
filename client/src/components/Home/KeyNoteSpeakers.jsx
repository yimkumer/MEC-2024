import React from "react";

const KeyNoteSpeakers = () => {
  return (
    <section id="speakers" className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <p className="comn-hdg wow fadeInLeft">Keynote Speakers</p>
            <div className="team-grids">
              <div className="galrypage">
                <div className="grid gallery-items">
                  <div className="img-social">
                    <div className="img-holder">
                      <img
                        src="assets/DrPrasenjit.png"
                        className="img-thumbnail"
                      />
                      <div className="b-wrapper col-sm-12">
                        <span className="name">
                          Dr. Jaume Anguera, 1st IEEE Fellow, Founder and CTO at
                          Ignion
                        </span>
                        <span className="designation">
                          {" "}
                          Associate Professor at Universitat Ramon Llull, IEEE
                          Distinguished Professor
                        </span>
                        <span className="qual">United Kingdom.</span>
                        <div
                          data-toggle="modal"
                          data-target="#modal1"
                          className="preconference"
                          data-title="Dr. Jaume Anguera, 1st IEEE Fellow, Founder and CTO at Ignion"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gallery-items">
                <div className="img-social">
                  <div className="img-holder">
                    <img
                      src="keynotespeakers/Stefan.jpg"
                      className="img-thumbnail"
                    />
                    <div className="b-wrapper col-sm-12">
                      <span className="name">Dr. Stefan Mangold, founder</span>
                      <span className="designation">
                        Gen­eral Man­ager of Loveﬁeld Wire­less
                      </span>
                      <span className="qual">Switzerland</span>
                      <div
                        data-toggle="modal"
                        data-target="#modal2"
                        className="preconference"
                        data-title="Dr. Stefan Mangold, founder"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="modal fade pre-modal" id="modal2" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gallery-items">
                <div className="img-social">
                  <div className="img-holder">
                    <img
                      src="keynotespeakers/Stefan.jpg"
                      className="img-thumbnail"
                    />
                    <div className="b-wrapper col-sm-12">
                      <span className="name">Dr. Stefan Mangold, founder</span>
                      <span className="designation">
                        Gen­eral Man­ager of Loveﬁeld Wire­less
                      </span>
                      <span className="qual">Switzerland</span>
                      <div
                        data-toggle="modal"
                        data-target="#modal2"
                        className="preconference"
                        data-title="Dr. Stefan Mangold, founder"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="modal fade pre-modal" id="modal2" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gallery-items">
                <div className="img-social">
                  <div className="img-holder">
                    <img
                      src="keynotespeakers/Stefan.jpg"
                      className="img-thumbnail"
                    />
                    <div className="b-wrapper col-sm-12">
                      <span className="name">Dr. Stefan Mangold, founder</span>
                      <span className="designation">
                        Gen­eral Man­ager of Loveﬁeld Wire­less
                      </span>
                      <span className="qual">Switzerland</span>
                      <div
                        data-toggle="modal"
                        data-target="#modal2"
                        className="preconference"
                        data-title="Dr. Stefan Mangold, founder"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="modal fade pre-modal" id="modal2" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header"></div>
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
