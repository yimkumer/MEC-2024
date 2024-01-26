import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      alert("All fields are required. Please fill in all the details.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      });

      if (response.ok) {
        console.log("Welcome User");
        alert("Welcome User");
        // Access the email from the state
        const email = this.state.email;

        // Construct the URL for the next page, including the email as a query parameter
        const nextPageURL = "/panel?email=" + encodeURIComponent(email);

        // Redirect to the next page with the email
        window.location.href = nextPageURL;
      } else {
        console.error("Error submitting form");
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  render() {
    return (
      <div id="login-background" class="row justify-content-center">
        {/* Login form */}
        <div id="login-form" class="col-md-5 shadow p-5 mb-5  rounded">
          <form
            className="col-md-12"
            action="/login-user"
            onSubmit={this.handleSubmit}
            autocomplete="off"
          >
            <div class="text-center">
              <img
                id="logo"
                src="assets/acharya.png"
                class="img-fluid center-block"
                alt="Logo"
              />
            </div>

            <h2 style={{ color: "white", textAlign: "center" }}>User Login</h2>
            <div className="mb-3">
              <label htmlFor="email">Enter your Email Address :</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                placeholder="Type your Email Address"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Enter your Password :</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
                placeholder="Type your Password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div class="text-center">
              {" "}
              <a
                href="/panel"
                class="ff-btn ff-btn-submit ff-btn-md btn-fill style-one disabled ff_btn_no_style"
                //type="submit"
              >
                Login
              </a>
            </div>
            <div className="text-center">
              <p id="registration">
                <br />
                Don't have an account ? <a href="/registration">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
