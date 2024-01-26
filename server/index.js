const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection pool
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   password: "root",
//   port: "5432",
//   database: "mec", // Change if your PostgreSQL server uses a different port
// });

//VERCEL POSTGRESQL connection
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

//Display particular user data
app.get("/user-details/:email", async (req, res) => {
  try {
    const { email } = req.params; // Get the email from the request parameters

    const query = `SELECT * FROM user_details WHERE email = $1`; // Parameterized query with placeholder for email
    const result = await pool.query(query, [email]); // Execute the query with the provided email

    // Check if a user with the given email exists
    if (result.rows.length === 0) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json(result.rows[0]); // Send the details of the found user
  } catch (error) {
    console.error("Error getting user details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to handle USER login
app.post("/login-user", async (req, res) => {
  try {
    const { email, password } = req.body;

    const query = `
      SELECT password
      FROM user_details
      WHERE email = $1
    `;

    const result = await pool.query(query, [email]);

    if (result.rows.length === 0) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    const storedPassword = result.rows[0].password;

    // Direct comparison (not secure)
    if (password === storedPassword) {
      // Successful login (not secure)
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Endpoint to handle form submissions
app.post("/submit-form", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phoneNumber,
      paperTitle,
      affiliation,
      organization,
      paymentId,
      presentationMode,
      paymentStatus,
    } = req.body;

    const query = `
      INSERT INTO user_details (
        name,
        email,
        password,
        phone_number,
        paper_title,
        affiliation,
        organization,
        payment_id,
        mode_of_presentation,
        payment_status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,$10)
    `;

    const values = [
      name,
      email,
      password,
      phoneNumber,
      paperTitle,
      affiliation,
      organization,
      paymentId,
      presentationMode,
      paymentStatus,
    ];

    await pool.query(query, values);

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/view-form", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM user_details"); // Replace 'your_table' with your actual table name
    res.json(result.rows);
  } catch (error) {
    console.error("Error getting data:", error);
    res.status(500).json({ error: "Internal Server  : Cannot View" });
  }
});

app.delete("/view-form/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query(
      "DELETE FROM user_details WHERE id = $1 RETURNING *",
      [id]
    ); // Replace 'your_table' with your actual table name
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Row not found" });
    } else {
      res.json({ message: "Row deleted successfully" });
    }
  } catch (error) {
    console.error("Error deleting row:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//update table

app.put("/edit-form/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      email,
      password,
      phone_number,
      paper_title,
      affiliation,
      organization,
      payment_id,
      mode_of_presentation,
      payment_status,
    } = req.body;

    const updateQuery = `
        UPDATE user_details
        SET
          name = $1,
          email = $2,
          password = $3,
          phone_number = $4,
          paper_title = $5,
          affiliation = $6,
          organization = $7,
          payment_id = $8,
          mode_of_presentation = $9,
          payment_status = $10
        WHERE id = $11
      `;

    const updateValues = [
      name,
      email,
      password,
      phone_number,
      paper_title,
      affiliation,
      organization,
      payment_id,
      mode_of_presentation,
      payment_status,
      id,
    ];

    await pool.query(updateQuery, updateValues);

    res.json({ message: "Row updated successfully" });
  } catch (error) {
    console.error("Error updating row:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
