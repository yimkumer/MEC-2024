import React, { Component, useRef } from "react";

class Console extends Component {
  render() {
    // const urlParams = new URLSearchParams(window.location.search);
    // const receivedEmail = urlParams.get("email");
    return (
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-9881757 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id={9881757}
        data-element_type="section"
      >
        <div
          id="logout-btn"
          className="hero-btns wow fadeInUp"
          data-wow-duration="1s"
        >
          <a href="/home" className="btn-fill style-three">
            Logout
          </a>
        </div>
        <h1 className="text-center mt-5">Welcome</h1>
        {/* <h2 className="text-center mt-3">User-Email : {receivedEmail}</h2> */}
        <h5 className="text-center mt-3">Your Application Status :</h5>
        <div className="elementor-container elementor-column-gap7 -default">
          <button className="btn btn-outline-danger"> Export PDF</button>
          <table class="table table-hover table-responsive">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Paper title</th>
                <th>Mode of presentation</th>
                <th>Payment status</th>
                <th>Payment submission status</th>
                <th>Paper appectance status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>test@gmail.com</td>
                <td>9999111188</td>
                <td>E-waste Mangagement</td>
                <td>Online</td>
                <td>Pending</td>
                <td>Pending</td>
                <td>Pending</td>
              </tr>
            </tbody>
            <p>
              Note : The "Submit Paper" button will be available once your
              Payment status has been verified ( 2 - 3 working days)
            </p>
          </table>
          <button type="button" class="btn btn-outline-success">
            Submit Paper
          </button>
        </div>

        <form id="rules" class="col-md-11 shadow p-5 mb-5  rounded">
          {/* General Guidelins*/}
          <h5 className="heading-title">
            ABSTRACT AND PAPER SUBMISSION-GENERAL GUIDELINES :
          </h5>
          <p>
            Abstracts must include a clear indication of the purpose of paper,
            major results implications, and key references. The authors(s)
            should clearly mention under what track the paper should be
            included. They should adhere to the following while typing in
            MS-Word: Length: 150-200 words excluding title/cover page Keywords:
            3-5 Words Font: Times New Roman Font Size: 12 points Line Spacing:
            1.5
          </p>

          {/* Paper submission*/}
          <h5 className="heading-title">PAPER SUBMISSION :</h5>
          <p>
            The Paper presenters should adhere to the following guidelines while
            submitting paper for publication -
          </p>
          <ol>
            <li>
              Manuscript should be of 2500-4500 words approximately, Including
              tables, graphs & charts
            </li>
            <li>
              All text should be in double space with 1-inch margins on all the
              sides on A4 size paper using Font Times New Roman size 12
            </li>
            <li>
              The first page of the manuscript should have the title of the
              paper, name of the Authors, organizational/Institute affiliation,
              complete mailing address, phone number and E-mail address. Please
              do not indicate author name, affiliation, or any other such
              information in the manuscript elsewhere
            </li>
            <li>
              Second page of manuscript should have the abstract of 150 to 200
              words with 3-5 keywords, manuscript should have maximum of 8 to 10
              pages
            </li>
            <li>
              All tables, charts, and graphs should be prepared on separate
              sheets, after the references section, and numbered continuously in
              Arabic numerical as referred to in the text. The sources wherever
              necessary, should be mentioned at the bottom
            </li>
            <li>
              References should be arranged in alphabetical order using the APA
              Referencing Style
            </li>
          </ol>

          {/* Presentation of paper*/}
          <h5 className="heading-title">PUBLICATION DETAILS :</h5>
          <p>
            Selected Papers will be published in the Book series with ISBN
            published in IIP Book. **10 best papers will be sent for UGC care
            list for publication
          </p>
        </form>
      </section>
    );
  }
}

export default Console;
