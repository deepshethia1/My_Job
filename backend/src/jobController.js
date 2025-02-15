const db = require("./../db");

const create = async (req, res) => {
  const {
    company_name,
    role,
    start_date,
    end_date,
    location,
    pay,
    work_day,
    currency,
    duration,
    weekly,
    additional_details,
    created_by,
  } = req.body;
  try {
    await db.query(
      "INSERT INTO job( company_name,role,start_date,end_date,location,pay,work_day,currency,duration,weekly,additional_details,created_by)VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        company_name,
        role,
        start_date,
        end_date,
        location,
        pay,
        work_day,
        currency,
        duration,
        weekly,
        additional_details,
        created_by,
      ]
    );
    res.json({ message: "Job created successfully." });
  } catch (error) {
    return res.status(401).json({ error: "Something went wrong." });
  }
};

const update = async (req, res) => {
  const {
    company_name,
    role,
    start_date,
    end_date,
    location,
    pay,
    work_day,
    currency,
    duration,
    weekly,
    additional_details,
    id,
  } = req.body;
  try {
    await db.query(
      `UPDATE job
    SET
      company_name = ?,
      role = ?,
      start_date = ?,
      end_date = ?,
      location = ?,
      pay = ?,
      work_day = ?,
      currency = ?,
      duration = ?,
      weekly = ?,
      additional_details = ?
    WHERE id = ?`,
      [
        company_name,
        role,
        start_date,
        end_date,
        location,
        pay,
        work_day,
        currency,
        duration,
        weekly,
        additional_details,
        id,
      ],
      (error, results) => {
        if (error) {
          console.error("Error executing update query:", error);
          return;
        }
        res.json({
          message: "Job updated successfully.",
          result: results.affectedRows,
        });
        // console.log("Job updated successfully:", results.affectedRows);
      }
    );
  } catch (error) {
    return res.status(401).json({ error: "Something went wrong." });
  }
};

const deleteJob = (req, res) => {
  const jobId = req.params.id;
  try {
    db.query(`DELETE FROM job_apply WHERE job_id = ?`, [jobId], (error, results) => {
    });
    db.query(`DELETE FROM job WHERE id = ?`, [jobId], (error, results) => {
      console.log("error", error)
      if (error) {
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      if (results.affectedRows > 0) {
        res.status(200).json({ message: "Job deleted successfully" });
      } else {
        res.status(404).json({ error: "Job not found" });
      }
    });
  } catch (error) {
    return res.status(401).json({ error: "Something went wrong." });
  }
};

const getJobs = async (req, res) => {
  try {
    const id = req.user.user.id;
    db.query(`SELECT * FROM job where created_by = ?`, [id], (error, data) => {
      //   console.log(data);
      res.status(200).json({ jobs: data });
    });
    // console.log(req);
  } catch (error) {
    return res.status(401).json({ error: "Something went wrong." });
  }
};

const viewAppliedJobs = (req, res) => {
  try {
    const jobId = req.params.id;
    db.query(
      `SELECT 
      job.id AS job_id,
      job.role AS job_title,
      users.id AS user_id,
      users.name AS user_name,
      users.email AS user_email,
      users.gender AS user_gender,
      users.phone_number AS user_phone_number,
      users.nationality AS user_nationality,
      users.area AS user_area,
      users.role_exp AS user_role_exp,
      users.resume AS user_resume
      FROM job_apply
      JOIN job ON job_apply.job_id = job.id
      JOIN users ON job_apply.user_id = users.id
      WHERE job.id = ?
      `,
      [jobId],
      (error, data) => {
        //   console.log(data);
        res.status(200).json({ jobs: data });
      }
    );
    // console.log(req);
  } catch (error) {
    return res.status(401).json({ error: "Something went wrong." });
  }
};
module.exports = { create, update, deleteJob, getJobs, viewAppliedJobs };
