import ContactUs from "../ContactUs";
import Map from "../Map";
import MyForm from "./MyForm";

const Register = () => {
  return (
    <div
      data-elementor-type="wp-page"
      data-elementor-id={1061}
      className="elementor elementor-1061"
    >
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-9881757 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id={9881757}
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap7 -default">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4fb5b57"
            data-id="4fb5b57"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              {/* Registtration Fees*/}
              <h5 className="heading-title">Registartion Fees:</h5>
              <table style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ border: "none" }}>Category</th>
                    <th style={{ border: "none" }}>Fees</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "none", padding: "10px" }}>
                      Academician / Research Scholar (PG and PhD Scholars)
                    </td>
                    <td style={{ border: "none", padding: "10px" }}>
                      Rs. 2000 (Maximum of 3 Authors)
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "none", padding: "10px" }}>
                      Corporate Professionals
                    </td>
                    <td style={{ border: "none", padding: "10px" }}>
                      Rs. 3000 (Maximum of 3 Authors)
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "none", padding: "10px" }}>
                      Foreign Delegates
                    </td>
                    <td style={{ border: "none", padding: "10px" }}>$100</td>
                  </tr>
                  <tr>
                    <td style={{ border: "none", padding: "10px" }}>
                      UG Students
                    </td>
                    <td style={{ border: "none", padding: "10px" }}>Rs. 750</td>
                  </tr>
                </tbody>
              </table>

              {/* SUBMISSION DATES*/}
              <h5 className="heading-title">SUBMISSION DATES :</h5>
              <ul>
                <li>Abstract Submission: Feb 16, 2024</li>
                <li>Abstract Acceptance: Feb 20, 2024</li>
                <li>Full Paper Submission: March 9, 2024</li>
                <li>Full Paper Acceptance: March 15, 2024</li>
              </ul>

              <div
                className="elementor-element elementor-element-ab7cb93 elementor-align-left elementor-widget elementor-widget-rt-title"
                data-id="ab7cb93"
                data-element_type="widget"
                data-widget_type="rt-title.default"
              >
                <div className="elementor-widget-container">
                  <div className="section-heading style-one">
                    <div className="heading-subtitle" style={{ fontSize: 25 }}>
                      Reach out to us !
                    </div>
                    <h2 className="heading-title" style={{ fontSize: 40 }}>
                      Find us here :
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-8866411 contact-social elementor-widget elementor-widget-html"
                data-id={8866411}
                data-element_type="widget"
                data-widget_type="html.default"
              >
                <div className="elementor-widget-container">
                  <ul className="social">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/acharya.ac.in"
                        className="facebook"
                        rel="noreferrer"
                      >
                        <img src="assets/facebook.png" alt="facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://twitter.com/acharya_ac_in"
                        className="twitter"
                        rel="noreferrer"
                      >
                        <img src="assets/twitter.png" alt="twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/user/acharya7317"
                        className="youtube"
                        rel="noreferrer"
                      >
                        <img src="assets/youtube.png" alt="youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/acharyainstitutes/"
                        className="instagram"
                        rel="noreferrer"
                      >
                        <img src="assets/instagram.png" alt="instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/school/acharya-institutes/"
                        className="linkedin"
                        rel="noreferrer"
                      >
                        <img src="assets/linkedin.png" alt="linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5d94011"
            data-id="5d94011"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <legend
                className="ff_screen_reader_title"
                style={{
                  margin: "0!important",
                  padding: "0!important",
                  height: "0!important",
                  textIndent: "-999999px",
                  width: "0!important",
                }}
              >
                Registration Form
              </legend>
              <legend className="ff_screen_reader_title">
                MEC 2024 Registration Form :
              </legend>
              <MyForm />
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
      <Map />
    </div>
  );
};

export default Register;
