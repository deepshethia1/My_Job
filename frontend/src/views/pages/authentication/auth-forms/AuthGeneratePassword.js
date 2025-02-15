// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, CircularProgress, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { useForm } from 'react-hook-form';
import PasswordField from 'ui-component/passwordField';

// third party
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

import { useAppSelector } from '../../../../store';
// ============================|| FIREBASE - LOGIN ||============================ //

const GeneratePasswordForm = (props) => {
  const { resetPassword } = props;
  const dataLoading = useAppSelector((state) => state.dataLoading);
  const theme = useTheme();

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password length should be at least 8 characters')
      .matches(/^(\S+$)/, '* This field cannot contain blankspaces')
      .trim(),
    cpassword: Yup.string()
      .required('Confirm Password is required')
      .min(4, 'Password length should be at least 4 characters')
      .matches(/^(\S+$)/, '* This field cannot contain blankspaces')
      .trim()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(formSchema)
  });

  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const onSubmit = (data) => {
    resetPassword(data);
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
          <Grid item>
            <Stack alignItems="center" justifyContent="center" spacing={1}>
              <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                New Password
              </Typography>
              <Typography
                variant="caption"
                textAlign={matchDownSM ? 'center' : 'center'}
                sx={{ margin: '0px 15px 5px 15px !important' }}
              >
                Enter your new password
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={matchDownSM ? 0 : 2}>
          <Grid item xs={12} sm={12}>
            <PasswordField
              label="New Password"
              control={control}
              rules={{ required: true }}
              name={'password'}
              helperText={errors.password?.message}
              errors={errors}
              fullWidth
              {...register('password')}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <PasswordField
              label="Confirm Password"
              control={control}
              rules={{ required: true }}
              name={'cpassword'}
              helperText={errors.cpassword?.message}
              errors={errors}
              fullWidth
              {...register('cpassword')}
            />
          </Grid>
        </Grid>

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
    </>
  );
};

export default GeneratePasswordForm;
