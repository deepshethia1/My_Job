import { useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';
import { CardContent, Grid, Typography } from '@mui/material';


const AccountSettings = () => {
  const userData = useSelector((state) => state.authorization.userData);

  let userFields;
  if (userData.name) {
    userFields = [
      { label: 'Name', value: userData.name },
      { label: 'Last Name', value: userData.lastName },
      { label: 'Email', value: userData.email },
      { label: 'Area', value: userData.area },
      { label: 'Gender', value: userData.gender },
      { label: 'Phone Number', value: userData.phone_number },
      { label: 'Nationality', value: userData.nationality },
      { label: 'Role Experience', value: userData.role_exp },
      { label: 'Expected Salary', value: `${userData.min_expected_salary} AED - ${userData.max_expected_salary} AED` },
    ];
  } else {
    userFields = [
      {
        label: userData.company_name ? 'Company Name' : 'Building Name',
        value: userData.company_name || userData.building_name
      },
      { label: 'Email', value: userData.email },
      { label: 'Registration Number', value: userData.registration_number },
      { label: 'Phone Number', value: userData.phone_number },
    ];
  }

  return (
    <MainCard content={false}>
      <CardContent>
        <Grid container spacing={2}>
          {userFields.map((field, index) => (
            <Grid item xs={12} key={index}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Typography variant="subtitle1" color="inherit">
                    {field.label}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" color="grey">
                    {field.value}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </MainCard>
  );
};

export default AccountSettings;
