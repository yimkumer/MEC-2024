import React, { Component } from "react";

class Console extends Component {
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const receivedEmail = urlParams.get("email");
    return (
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-9881757 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id={9881757}
        data-element_type="section"
      >
        <h1 className="text-center mt-5">Welcome User </h1>
        <h2 className="text-center mt-3">User-Email : {receivedEmail}</h2>

        <div className="elementor-container elementor-column-gap7 -default">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>phone_number</th>
                <th>paper_title</th>
                <th>mode_of_presentation</th>
                <th>payment_status</th>
                <th>payment_submission_status</th>
                <th>paper_appectance_status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Console;
