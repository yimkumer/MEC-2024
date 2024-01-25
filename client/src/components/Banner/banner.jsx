const Banner = () => {
  return (
    <section className="breadcrumbs-banner">
      <div className="container">
        <div className="breadcrumbs-area">
          <img
            src="./assets/slogan.png"
            className="img-fluid"
            alt="Acharya slogan"
            width="25%"
          />
          <div className="breadcrumb-area">
            <div className="entry-breadcrumb">
              {/* Breadcrumb NavXT 7.2.0 */}
              <span property="itemListElement" typeof="ListItem">
                <a
                  property="item"
                  typeof="WebPage"
                  title="Go to Acharya."
                  href="https://www.acharya.ac.in/"
                  className="home"
                >
                  <span property="name" style={{ fontSize: 30 }}>
                    Acharya &gt;{" "}
                  </span>
                </a>
                <meta property="position" content={1} />
              </span>{" "}
              <span property="itemListElement" typeof="ListItem">
                <span
                  property="name"
                  style={{ fontSize: 30 }}
                  className="post post-page current-item"
                >
                  Visit Us
                </span>
                <meta property="url" content="https://www.acharya.ac.in/" />
                <meta property="position" content={2} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
