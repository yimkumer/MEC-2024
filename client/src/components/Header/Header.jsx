import React from "react";

const Header = () => {
  return (
    <header className="header header1 sticky-on search-mobi-disable  toggle-mobi-disable  trheader">
      <div id="sticky-placeholder" />
      <div id="navbar-wrap" className="navbar-wrap">
        <div className="header-menu">
          <div className="header-width">
            <div className="container-fluid">
              <div className="inner-wrap">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="site-branding">
                    <div className="header-logo logo-1 logo-light">
                      <a href="/home">
                        <img
                          style={{
                            border: "1px solid #093ed2",
                            width: 80,
                            height: 80,
                            backgroundColor: "#ffffff",
                            padding: "2px",
                            borderRadius: "7px",
                          }}
                          class="img-fluid"
                          src="assets/head2.png"
                          className="attachment-full size-full"
                          alt=""
                          decoding="async"
                        />
                      </a>
                    </div>
                    <div className="header-logo logo-2 logo-dark">
                      <a href="/home">
                        <img
                          style={{ width: 80, height: 80 }}
                          class="img-fluid"
                          src="assets/head2.png"
                          className="attachment-full size-full"
                          alt=""
                          decoding="async"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
