import React, { Fragment, useEffect, useState } from "react";

const Adminconsole = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/view-form"); // Replace with your endpoint
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/view-form/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Row deleted successfully");
        fetchData(); // Refresh the data after deletion
        alert("Row deleted successfully!");
      } else {
        console.error("Error deleting row");
        alert("Error deleting row. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  return (
    <Fragment>
      <h1 className="text-center mt-5">Data Table</h1>
      <div id="admin-table" class="container">
        <table class="table table-hover table-responsive">
          <thead>
            <tr>
              <th>SLno</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone Number</th>
              <th>Paper Title</th>
              <th>Affiliation</th>
              <th>Organization</th>
              <th>Payment ID</th>
              <th>Presentation Mode</th>
              <th>Payment Staus</th>
              <th>Paper Submission Status</th>
              <th>Paper Acceptence Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
                <td>{row.phone_number}</td>
                <td>{row.paper_title}</td>
                <td>{row.affiliation}</td>
                <td>{row.organization}</td>
                <td>{row.payment_id}</td>
                <td>{row.mode_of_presentation}</td>
                <td>{row.payment_status}</td>
                <td>{row.paper_submission_status}</td>
                <td>{row.paper_acceptence_status}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Adminconsole;
