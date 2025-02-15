// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  FormControl,
  CircularProgress,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

import { forgetPassword } from '../../../../store/thunk/authThunk';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { useNavigate } from 'react-router';
// ============================|| FIREBASE - LOGIN ||============================ //

const ForgotPasswordForm = ({ ...others }) => {
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const dataLoading = useAppSelector((state) => state.dataLoading);
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const forgotPasswordSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      appDispatch(forgetPassword({ email: values.email, navigate }));
      if (scriptedRef.current) {
        setStatus({ success: true });
        setSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      if (scriptedRef.current) {
        setStatus({ success: false });
        setErrors({ submit: err.message });
        setSubmitting(false);
      }
    }
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
          <Grid item>
            <Stack alignItems="center" justifyContent="center" spacing={1}>
              <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                Forgot Password
              </Typography>
              <Typography
                variant="caption"
                textAlign={matchDownSM ? 'center' : 'center'}
                sx={{ margin: '0px 15px 5px 15px !important' }}
              >
                Enter your email and we&apos;ll send you a link to reset your password
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required').trim()
        })}
        onSubmit={forgotPasswordSubmit}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-login">Email Address</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address / Username"
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={dataLoading.loading}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  {dataLoading.loading && <CircularProgress sx={{ color: '#0000001f', mr: '10px' }} size="20px" />}
                  Submit
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ForgotPasswordForm;
