// mui library
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, useMediaQuery, FormControl, InputLabel, MenuItem, FormHelperText, Select } from '@mui/material';

import SelectField from 'ui-component/select';
// project import
import { useAppDispatch } from 'store';
import AnimateButton from 'ui-component/extended/AnimateButton';
import MainCard from 'ui-component/cards/MainCard';
import TextField from 'ui-component/textField';

// third-party import
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createJob } from 'store/thunk/authThunk';
import { useSelector } from 'react-redux';
import moment from 'moment';

const roleExperience = [
  'Domestic Help',
  'Security Guard',
  'Cashier',
  'Waiter',
  'Housekeeping',
  'Steward',
  'Warehouse Assistant',
  'Office Assistant',
  'Commi',
  'Nanny',
  'Gardener',
  'Handyman',
  'Electrician',
  'Plumber',
  'Carpenter',
  'Barista',
  'Receptionist',
  'Shop Helper',
  'Driver'
];

const duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const areaNames = [
  'Downtown Dubai',
  'Dubai Marina',
  'Jumeirah Beach Residence (JBR)',
  'Palm Jumeirah',
  'Al Barsha',
  'Deira',
  'Bur Dubai',
  'International City',
  'Satwa',
  'Al Quoz',
  'Business Bay',
  'Dubai Sports City',
  'Dubai Silicon Oasis',
  'Dubai Investment Park (DIP)',
  'Dubai Healthcare City (DHCC)',
  'Discovery Gardens',
  'Jumeirah Village Circle (JVC)',
  'Jumeirah Village Triangle (JVT)',
  'Al Nahda',
  'Muhaisnah',
  'Al Rigga',
  'Al Karama',
  'Hor Al Anz',
  'Al Mamzar',
  'Al Qusais',
  'Barsha Heights (Tecom)',
  'Al Muraqqabat',
  'Al Rashidiya',
  'Al Warqaa',
  'Al Khail',
  'Umm Suqeim',
  'Silicon Oasis',
  'Jebel Ali',
  'Academic City',
  'Remraam',
  'Motor City',
  'Dubai Production City (IMPZ)',
  'Dubai International City',
  'Dubai South',
  'Dubai Investment Park (DIP)',
  'Dubai Residence Complex',
  'Al Mizhar',
  'Al Furjan',
  'Al Sufouh',
  'Dubai Industrial City',
  'Dubai Knowledge Park',
  'Dubai Studio City',
  'Dubai Media City',
  'Dubai Internet City',
  'Al Awir'
];

const AccountSettings = () => {
  const theme = useTheme();
  const userData = useSelector((state) => state.authorization.userData);
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const appDispatch = useAppDispatch();

  // formschema validation
  const formSchema = Yup.object().shape({
    company_name: Yup.string()
      .required('Company Name is required')
      .matches(/^[^\d]+$/, 'Numbers are not allowed')
      .trim(),
    role_type: Yup.string().required('Must Select Role'),
    to_date: Yup.string().required('To date is required'),
    from_date: Yup.string().required('From date is required'),
    location: Yup.string().required('Location is required'),
    pay: Yup.string()
      .required('Pay is required')
      .matches(/^[0-9]+$/, 'Only numbers are allowed'),
    per: Yup.string().required('Please select Per'),
    duration: Yup.string().required('Please select duration'),
    week_month: Yup.string().required('Please select week/month'),
    weekly_off: Yup.string().required('Must Select Weekly Off'),
    additional: Yup.string().required('Additional Details is required')
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(formSchema)
  });

  // onsubmit function
  const onSubmit = (data) => {
    let newData = {
      company_name: data?.company_name,
      role: data?.role_type,
      start_date: moment(data?.from_date).format('YYYY-MM-DD'),
      end_date: moment(data?.to_date).format('YYYY-MM-DD'),
      location: data?.location,
      pay: data?.pay,
      work_day: data?.per,
      currency: 'AED',
      duration: `${data?.duration}/${data?.week_month}`,
      additional_details: data?.additional,
      weekly: data?.weekly_off,
      created_by: userData?.id
    };
    appDispatch(createJob(newData));
    reset();
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MainCard sx={{ border: 'none' }} title="List New Job">
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid sx={{ mt: 2, mb: matchDownSM ? 2 : 0 }} container spacing={matchDownSM ? 2 : 2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Company Name"
                    control={control}
                    rules={{ required: true }}
                    helperText={errors.company_name?.message}
                    name={'company_name'}
                    errors={errors}
                    fullWidth
                    {...register('company_name', { value: '' })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SelectField
                    label="Role"
                    control={control}
                    rules={{ required: true }}
                    name="role_type"
                    errors={errors}
                    helperText={errors.role_type?.message}
                    options={roleExperience}
                    {...register('role_type', { value: '' })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        control={control}
                        name="from_date"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <FormControl fullWidth sx={{ minWidth: 110 }}>
                            <DatePicker
                              slotProps={{
                                textField: {
                                  error: errors['from_date'] ? true : false,
                                  helperText: errors['from_date'] ? errors['from_date'].message : null
                                }
                              }}
                              onChange={field.onChange}
                              label="From Date"
                              value={field?.value}
                            />
                          </FormControl>
                        )}
                        {...register('from_date', { value: '' })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        control={control}
                        name={'to_date'}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <FormControl fullWidth sx={{ minWidth: 110 }}>
                            <DatePicker
                              slotProps={{
                                textField: {
                                  error: errors['to_date'] ? true : false,
                                  helperText: errors['to_date'] ? errors['to_date'].message : null
                                }
                              }}
                              onChange={field.onChange}
                              label="To Date"
                              value={field?.value}
                            />
                          </FormControl>
                        )}
                        {...register('to_date', { value: '' })}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SelectField
                    label="Location"
                    control={control}
                    rules={{ required: true }}
                    name={'location'}
                    errors={errors}
                    helperText={errors.location?.message}
                    options={areaNames}
                    {...register('location', { value: '' })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Pay"
                        type="number"
                        control={control}
                        rules={{ required: true }}
                        helperText={errors.pay?.message}
                        name={'pay'}
                        errors={errors}
                        fullWidth
                        {...register('pay', { value: '' })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name={'per'}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <FormControl fullWidth sx={{ minWidth: 110 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Per</InputLabel>
                            <Select
                              label={'per'}
                              value={field.value}
                              onChange={field.onChange}
                              error={errors?.per}
                              helperText={
                                errors && errors?.per
                                  ? errors?.per?.type === 'required'
                                    ? `Please select valid per`
                                    : errors.per?.message
                                  : errors.per?.message
                              }
                            >
                              <MenuItem value={'Hour'}>Hour</MenuItem>
                              <MenuItem value={'Day'}>Day</MenuItem>
                              <MenuItem value={'Week'}>Week</MenuItem>
                              <MenuItem value={'Month'}>Month</MenuItem>
                            </Select>
                            <FormHelperText sx={{ color: 'red' }}>
                              {errors && errors?.per
                                ? errors?.per?.type === 'required'
                                  ? `Please select valid per`
                                  : errors.per?.message
                                : errors.per?.message}
                            </FormHelperText>
                          </FormControl>
                        )}
                        {...register('per', { value: '' })}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <SelectField
                        label="Duration"
                        control={control}
                        rules={{ required: true }}
                        name={'duration'}
                        errors={errors}
                        helperText={errors.duration?.message}
                        options={duration}
                        {...register('duration', { value: '' })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name={'week_month'}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <FormControl fullWidth sx={{ minWidth: 110 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Weeks/Months</InputLabel>
                            <Select
                              label={'week_month'}
                              value={field.value}
                              onChange={field.onChange}
                              error={errors?.week_month}
                              helperText={
                                errors && errors?.week_month
                                  ? errors?.week_month?.type === 'required'
                                    ? `Please select valid week_month`
                                    : errors.week_month?.message
                                  : errors.week_month?.message
                              }
                            >
                              <MenuItem value={'weeks'}>Weeks</MenuItem>
                              <MenuItem value={'months'}>Months</MenuItem>
                            </Select>
                            <FormHelperText sx={{ color: 'red' }}>
                              {errors && errors?.week_month
                                ? errors?.week_month?.type === 'required'
                                  ? `Please select valid week_month`
                                  : errors.week_month?.message
                                : errors.week_month?.message}
                            </FormHelperText>
                          </FormControl>
                        )}
                        {...register('week_month', { value: '' })}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SelectField
                    fullWidth
                    label="Weekly-off"
                    control={control}
                    rules={{ required: true }}
                    name={'weekly_off'}
                    errors={errors}
                    helperText={errors.weekly_off?.message}
                    options={weekDays}
                    {...register('weekly_off', { value: '' })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Additional Details"
                    type="description"
                    control={control}
                    rules={{ required: true }}
                    helperText={errors.additional?.message}
                    name={'additional'}
                    errors={errors}
                    fullWidth
                    {...register('additional', { value: '' })}
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 2, display: 'flex' }}>
                <AnimateButton>
                  <Button
                    disableElevation
                    // disabled={dataLoading.loading}
                    size="large"
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    {/* {dataLoading.loading && <CircularProgress sx={{ color: '#0000001f', mr: '10px' }} size="20px" />} */}
                    Save
                  </Button>
                </AnimateButton>
              </Box>
            </form>
          </>
        </MainCard>
      </LocalizationProvider>
    </>
  );
};

export default AccountSettings;
