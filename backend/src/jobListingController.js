const db = require("./../db");
const jobListing = async (req, res) => {
  try {
    const id = req.user.user.id;
    // db.query(`SELECT * FROM job`, (error, data) => {
    db.query(
      `SELECT job.id, job.*,
        (CASE WHEN job_apply.user_id = ? THEN true ELSE false END) AS applied
        FROM job
        LEFT JOIN job_apply ON job.id = job_apply.job_id AND job_apply.user_id = ? group by job.id`,
      [id, id], // Add a comma here to separate the array elements
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
    return res.status(401).json({ error: "Something went wrong." });
  }
};
module.exports = { jobListing };
