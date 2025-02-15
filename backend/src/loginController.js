const db = require("./../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("./../config");
const createS3Folder = require("./aws");
const secretKey = config.jwtToken.tokenSecret;
const saltRounds = 10;

const registration = async (req, res) => {
  const {
    name,
    email,
    password,
    username,
    gender,
    phone_number,
    nationality,
    role_exp,
    area,
    min_expected_salary,
    max_expected_salary,
    role,
    lastName
  } = req.body;
  try {
    let role_type = role === "Employee" ? 3 : null;
    if (role_type === null) {
      return res.status(401).json({ error: "Please select the role." });
    }
    
    const registerUser = async (fileUrl) => {
      try {
        const usernameCheck = await new Promise((resolve, reject) => {
          db.query(
            "SELECT * FROM users WHERE username = ?",
            [username],
            (err, result, fields) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            }
          );
        });
        if (usernameCheck && usernameCheck.length > 0) {
          console.error("Username already exists");
          return res.status(401).json({ error: "Username already exists." });
        }
        
        const emailCheck = await new Promise((resolve, reject) => {
          db.query(
            "SELECT * FROM users WHERE email = ?",
            [email],
            (err, result, fields) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            }
          );
        });
        if (emailCheck && emailCheck.length > 0) {
          console.error("Email already exists");
          return res.status(401).json({ error: "Email already exists." });
        }
        
        const phoneCheck = await new Promise((resolve, reject) => {
          db.query(
            "SELECT * FROM users WHERE phone_number = ?",
            [phone_number],
            (err, result, fields) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            }
          );
        });
        if (phoneCheck && phoneCheck.length > 0) {
          console.error("Phone number already exists");
          return res.status(401).json({ error: "Phone number already exists." });
        }
        
        const passwordHash = await bcrypt.hash(password, saltRounds);
        
        await db.query(
          "INSERT INTO users (name, password, email, username, gender, phone_number, nationality, role_exp, area, min_expected_salary, max_expected_salary, role, lastName, resume) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
          [
            name,
            passwordHash,
            email,
            username,
            gender,
            phone_number,
            nationality,
            role_exp,
            area,
            min_expected_salary,
            max_expected_salary,
            role_type,
            lastName,
            fileUrl
          ]
        );
        
        res.json({ message: "User registered successfully" });
      } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    };
    
    if (req.files !== null && req.files && req.files.resume) {
      const uploadedFile = req.files.resume;
      const timestamp = Date.now();
      const fileName = `${username}_resume_${timestamp}.${uploadedFile.name.split('.').pop()}`;
      const filePath = 'resume2/' + fileName;

      createS3Folder(filePath, uploadedFile.data, async (err, location) => {
        if (err) {
          console.error("Error creating S3 folder:", err);
          return res.status(500).json({ error: "Error creating S3 folder" });
        } else {
          const fileUrl = location;
          await registerUser(fileUrl);
        }
      });
    } else {
      await registerUser(null);
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const employerRegistration = async (req, res) => {
  const {
    company_name,
    building_name,
    registration_number,
    username,
    email,
    phone_number,
    password,
    role,
  } = req.body;
  try {
    let role_type;
    let additionalField;
    let additionalFieldValue;

    if (role === "EmployerCompany") {
      role_type = 2;
      additionalField = "company_name";
      additionalFieldValue = company_name;
    } else if (role === "EmployerHousehold") {
      role_type = 2;
      additionalField = "building_name";
      additionalFieldValue = building_name;
    } else {
      return res.status(401).json({ error: "Please select the role." });
    }
    
    const usernameCheck = await new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
        (err, result, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
    if (usernameCheck && usernameCheck.length > 0) {
      return res.status(401).json({ error: "Username already exists." });
    }
    
    const emailCheck = await new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, result, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
    if (emailCheck && emailCheck.length > 0) {
      return res.status(401).json({ error: "Email already exists." });
    }
    
    const phoneCheck = await new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE phone_number = ?",
        [phone_number],
        (err, result, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
    if (phoneCheck && phoneCheck.length > 0) {
      return res.status(401).json({ error: "Phone number already exists." });
    }
    
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const query = `
      INSERT INTO users (username, email, phone_number, password, role, ${additionalField}, registration_number) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      username,
      email,
      phone_number,
      passwordHash,
      role_type,
      additionalFieldValue,
      registration_number
    ];

    await db.query(query, values);

    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
        (err, result, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
    if (result.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    if (result && result.length > 0) {
      const user = result[0];
      const hashedPassword = user.password;
      const passwordMatch = await bcrypt.compare(password, hashedPassword);
      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const token = jwt.sign({ user }, secretKey, { expiresIn: "1h" });
      user.token = token;
      res.json(user);
    }
  } catch (error) {
    console.error("Error fetching user by email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { registration, login, employerRegistration };