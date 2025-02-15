const mysql = require("mysql");
const config = require("./config");

const pool = mysql.createPool({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
  connectionLimit: 10, // Adjust this based on your needs
});

console.log("MySQL connection pool created"); // Add this line

module.exports = pool;
