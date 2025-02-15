const db = require("./../db");
const searchJob = (req, res) => {
  try {
    const { role } = req.body;
    // db.query(`SELECT * FROM job`, (error, data) => {
    db.query(
      `SELECT * FROM job where role LIKE ?`,
      [`%${role}%`], // Enclose the placeholder with % symbols
      (error, data) => {
        if (error) {
          console.error("Error fetching jobs:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        res.status(200).json({ jobs: data });
      }
    );
    // console.log(req);
  } catch (error) {
    console.log("Error toh yah hai", error);
    return res.status(401).json({ error: "Something went wrong." });
  }
};
module.exports = { searchJob };
