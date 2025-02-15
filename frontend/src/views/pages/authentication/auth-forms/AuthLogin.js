import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { loginUser } from '../../../../store/thunk/authThunk';
import { Container, Box, Typography, TextField, Button, Checkbox, FormControlLabel, Link, Divider, IconButton, CircularProgress } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Formik } from 'formik';
import * as Yup from 'yup';

function FirebaseLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const dataLoading = useAppSelector((state) => state.dataLoading);

    return (
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', minHeight: '100vh' }}>
            <Box sx={{ width: '100%', maxWidth: 400, mb: 2 }}>
                <Typography variant="h4" fontSize="25px" fontWeight="bold" mb={1}>Login to your Account</Typography>
                <Typography variant="body1" color="textSecondary" mb={2}>Welcome back! Select the below login methods.</Typography>
            </Box>
            <Box sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 3, p: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                    {/* Formik Form for Login */}
                    <Formik
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        validationSchema={Yup.object({
                            username: Yup.string().required('Username is required'),
                            password: Yup.string().required('Password is required')
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            dispatch(loginUser({ ...values, navigate }));
                            setSubmitting(false);
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    label="Email ID"
                                    variant="outlined"
                                    margin="normal"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.username && Boolean(errors.username)}
                                    helperText={touched.username && errors.username}
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
                                        )
                                    }}
                                />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                    <FormControlLabel control={<Checkbox color="primary" />} label="Remember me" />
                                    <Link href="#" color="primary">Forgot Password?</Link>
                                </Box>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={dataLoading.loading}
                                    sx={{ mb: 2 }}
                                >
                                    {dataLoading.loading && <CircularProgress size="20px" sx={{ mr: 1 }} />}
                                    Login
                                </Button>
                            </form>
                        )}
                    </Formik>

                    <Divider sx={{ my: 2 }}>or login with</Divider>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <IconButton><GoogleIcon /></IconButton>
                        <IconButton><FacebookIcon /></IconButton>
                        <IconButton><LinkedInIcon /></IconButton>
                    </Box>
                    <Typography variant="body2" color="textSecondary" align="center" mt={2}>
                        Don&apos;t have an account? <Link href="/register" color="primary">Register</Link>
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' }, flex: 1 }}>
                    <img
                        src="https://storage.googleapis.com/a1aa/image/KtFmH8aC9w3sjgUD5Y7pumaeWLJBEWXkZCirEvTTOH4.jpg"
                        alt="Illustration of a recruiter reviewing profiles"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default FirebaseLogin;
