const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "root",
//   host: "localhost",
//   port: 5432,
//   database: "mec"
// });

//VERCEL POSTGRESQL connection
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

module.exports = pool;
