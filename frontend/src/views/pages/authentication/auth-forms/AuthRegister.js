import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { registerUser, registerEmployer } from "../../../../store/thunk/authThunk"; // Adjust path as needed
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
  IconButton,
  CircularProgress,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Formik } from "formik";
import * as Yup from "yup";

function FirebaseRegister() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const dataLoading = useAppSelector((state) => state.dataLoading);
  const [registrationType, setRegistrationType] = useState("employee"); // Default to employee
  const [showPassword, setShowPassword] = useState(false); // Password visibility

  const validationSchema = Yup.object().shape({
    registrationType: Yup.string().required("Registration type is required"),
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobileNumber: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    password: Yup.string().required("Password is required"),
    ...(registrationType === "employee"
      ? {
          cv: Yup.mixed().required("CV is required"),
        }
      : {
          companyName: Yup.string().required("Company Name is required"),
          location: Yup.string().required("Location is required"),
          designation: Yup.string().required("Designation is required"),
          cv: Yup.mixed().required("Company Document is Required"),
        }),
  });

  const initialValues = {
    registrationType: "employee",
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    cv: null,
    companyName: "",
    location: "",
    designation: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    if (values.registrationType === 'employee') {
      const formData = new FormData();
      formData.append('fullName', values.fullName);
      formData.append('email', values.email);
      formData.append('mobileNumber', values.mobileNumber);
      formData.append('password', values.password);
      formData.append('cv', values.cv);
      dispatch(registerUser({ formData, navigate }));
    } else {
      const formData = new FormData();
      formData.append('fullName', values.fullName);
      formData.append('email', values.email);
      formData.append('mobileNumber', values.mobileNumber);
      formData.append('password', values.password);
      formData.append('companyName', values.companyName);
      formData.append('location', values.location);
      formData.append('designation', values.designation);
      formData.append('cv', values.cv);
      dispatch(registerEmployer({ formData, navigate }));
    }
    setSubmitting(false);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        minHeight: "100vh",
        pt: "64px", // Pushes form below navbar
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={1}>
        Registration Form
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={2}>
        Register as an employee or company.
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "white",
          textAlign: "center",
          mt: 1,
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              {/* Registration Type Dropdown */}
              <FormControl fullWidth margin="normal">
                <InputLabel id="registration-type-label">
                  Registering as
                </InputLabel>
                <Select
                  labelId="registration-type-label"
                  id="registration-type"
                  name="registrationType"
                  value={values.registrationType}
                  onChange={(e) => {
                    setRegistrationType(e.target.value);
                    setFieldValue("registrationType", e.target.value);
                  }}
                  onBlur={handleBlur}
                  error={
                    touched.registrationType && Boolean(errors.registrationType)
                  }
                  label="Registering as"
                >
                  <MenuItem value="employee">Employee</MenuItem>
                  <MenuItem value="company">Company</MenuItem>
                </Select>
                {touched.registrationType && errors.registrationType && (
                  <Typography color="error">{errors.registrationType}</Typography>
                )}
              </FormControl>

              {/* Common Fields */}
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                margin="normal"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.fullName && Boolean(errors.fullName)}
                helperText={touched.fullName && errors.fullName}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                label="Mobile Number"
                variant="outlined"
                margin="normal"
                name="mobileNumber"
                value={values.mobileNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.mobileNumber && Boolean(errors.mobileNumber)}
                helperText={touched.mobileNumber && errors.mobileNumber}
              />
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                margin="normal"
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                    <Button onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  ),
                }}
              />

              {/* Employee Fields */}
              {registrationType === "employee" && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<UploadFileIcon />}
                      sx={{ flexShrink: 0 }}
                    >
                      Upload CV
                      <input
                        type="file"
                        hidden
                        onChange={(event) =>
                          setFieldValue("cv", event.currentTarget.files[0])
                        }
                      />
                    </Button>
                    <Typography variant="body2" color="textSecondary" fontSize={12}>File Format PDF,DOC,DOCX. Txt..</Typography>
                    {values.cv && (
                      <Typography
                        variant="body2"
                        sx={{
                          ml: 2,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: 200,
                        }}
                      >
                        {values.cv.name}
                      </Typography>
                    )}
                  </Box>
                  {errors.cv && touched.cv && (
                    <Typography color="error" variant="body2">
                      {errors.cv}
                    </Typography>
                  )}
                </>
              )}

              {/* Company Fields */}
              {registrationType === "company" && (
                <>
                  <TextField
                    fullWidth
                    label="Company Name"
                    variant="outlined"
                    margin="normal"
                    name="companyName"
                    value={values.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.companyName && Boolean(errors.companyName)}
                    helperText={touched.companyName && errors.companyName}
                  />
                  <TextField
                    fullWidth
                    label="Location"
                    variant="outlined"
                    margin="normal"
                    name="location"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.location && Boolean(errors.location)}
                    helperText={touched.location && errors.location}
                  />
                  <TextField
                    fullWidth
                    label="Designation"
                    variant="outlined"
                    margin="normal"
                    name="designation"
                    value={values.designation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.designation && Boolean(errors.designation)}
                    helperText={touched.designation && errors.designation}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<UploadFileIcon />}
                      sx={{ flexShrink: 0 }}
                    >
                      Company Document Verification
                      <input
                        type="file"
                        hidden
                        onChange={(event) =>
                          setFieldValue("cv", event.currentTarget.files[0])
                        }
                      />
                    </Button>
                    <Typography variant="body2" color="textSecondary" fontSize={12}>Ex. Company Document,ISO..</Typography>
                    {values.cv && (
                      <Typography
                        variant="body2"
                        sx={{
                          ml: 2,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: 200,
                        }}
                      >
                        {values.cv.name}
                      </Typography>
                    )}
                  </Box>
                  <Typography variant="body2" color="textSecondary" fontSize={12} textAlign={'left'} marginTop={1}>File Format - PDF, DOC, DOCX. | File Size - Min 5 MB and Max 20 MB</Typography>
                  {errors.cv && touched.cv && (
                    <Typography color="error" variant="body2">
                      {errors.cv}
                    </Typography>
                  )}
                </>
              )}

              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={dataLoading.loading}
                sx={{ mt: 3, mb: 2 }}
              >
                {dataLoading.loading && (
                  <CircularProgress size="20px" sx={{ mr: 1 }} />
                )}
                Register Now
              </Button>

              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Send me important updates & promotions via SMS, email, and WhatsApp"
              />

              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ mt: 2 }}
              >
                By clicking Register, you agree to the{" "}
                <Link href="#">Terms and Conditions</Link> &{" "}
                <Link href="#">Privacy Policy</Link>.
              </Typography>

              <Divider sx={{ my: 2 }}>or signup with</Divider>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <IconButton>
                  <GoogleIcon />
                </IconButton>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default FirebaseRegister;