const db = require("./../db");
const applyJob = async (req, res) => {
  const jobId = req.params.id;
  const userId = req.user.user.id;
  try {
    await db.query("INSERT INTO job_apply(job_id,user_id)VALUES(?,?)", [
      jobId,
      userId,
    ]);
    res.json({ message: "Job Applied successfully." });
    // console.log(req);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Something went wrong." });
  }
};
module.exports = { applyJob };
