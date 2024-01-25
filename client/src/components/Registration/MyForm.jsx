import React, { Component } from "react";


class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            phoneNumber: "",
            paperTitle: "",
            affiliation: "",
            organization: "",
            paymentId: "",
            presentationMode: "online",
            paymentStatus:"processing"
        };
    }
    

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleRadioChange = (e) => {
        this.setState({ presentationMode: e.target.value });
    };

    handleSubmit = async (e) => {

        e.preventDefault();


        // Access form values
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const phoneNumber = e.target.phoneNumber.value;
        const paperTitle = e.target.paperTitle.value;
        const affiliation = e.target.affiliation.value;
        const organization = e.target.organization.value;
        const paymentId = e.target.paymentId.value;

        // Perform validation
        if (!name || !email || !password || !phoneNumber || !paperTitle || !affiliation || !organization || !paymentId) {
            alert("All fields are required. Please fill in all the details.");
            return;
        }
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }
 

        try {
            const response = await fetch("http://localhost:5000/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state),
            });

            if (response.ok) {
                console.log("Form submitted successfully");
                alert("Form submitted successfully!");
                // Optionally, reset the form or navigate to another page upon successful submission
            } else {
                console.error("Error submitting form");
                alert("Error submitting form. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An unexpected error occurred. Please try again later.");
        }
    };

    render() {
        return (
            <form className="col-md-12" post='/submit-form' onSubmit={this.handleSubmit}>
                
                <div className="mb-3 col-md-12">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required=""
                        placeholder="Your Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required=""
                        placeholder="Email Address"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        required=""
                        placeholder="Create Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        required=""
                        placeholder="Phone Number"
                        value={this.state.phoneNumber}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="paperTitle"
                        name="paperTitle"
                        required=""
                        placeholder="Enter Your Paper Title"
                        value={this.state.paperTitle}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <select
                        name="affiliation"
                        className="form-control"
                        id="affiliation"
                        aria-required="true"
                        style={{ backgroundColor: "#f5f5f5" }}
                        value={this.state.affiliation}
                        onChange={this.handleInputChange}
                    >
                        <option value="">Select Affiliation</option>
                        <option value="assistant_prof">Assistant Professor</option>
                        <option value="associate_prof">Associate Professor</option>
                        <option value="prof">Professor</option>
                        <option value="phd">PhD Scholar</option>
                        <option value="industry">Industry</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="organization"
                        name="organization"
                        required=""
                        placeholder="Institute / Organization"
                        value={this.state.organization}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="paymentId"
                        name="paymentId"
                        required=""
                        placeholder="Payment ID"
                        value={this.state.paymentId}
                        onChange={this.handleInputChange}
                    />
                </div> 
                <div className="mb-3">
                    <label htmlFor="presentationMode" className="form-label">
                        Mode of Presentation :
                    </label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="presentationMode"
                            id="online"
                            value="online"
                            checked={this.state.presentationMode === "online"}
                            onChange={this.handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="online">
                            Online
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="presentationMode"
                            id="offline"
                            value="offline"
                            checked={this.state.presentationMode === "offline"}
                            onChange={this.handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="offline">
                            Offline
                        </label>
                    </div>
                </div>
                <button
                    className="ff-btn ff-btn-submit ff-btn-md btn-fill style-one disabled ff_btn_no_style"
                    type="submit" 
                >
                    Register Now
                </button>
            </form>
        );
    }
}

export default MyForm;