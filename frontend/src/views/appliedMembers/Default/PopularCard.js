import PropTypes from 'prop-types';

// material-ui
import { CardContent, Divider, Grid, Typography, IconButton } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import BadgeIcon from '@mui/icons-material/Badge';
import WcIcon from '@mui/icons-material/Wc';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FlagIcon from '@mui/icons-material/Flag';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DescriptionIcon from '@mui/icons-material/Description';
import { Download } from '@mui/icons-material';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ value, isLoading }) => {
  // const dispatch = useDispatch();

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h4">{value?.role}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit" sx={{ display: 'flex' }}>
                          <BadgeIcon sx={{ mr: '2px' }} /> Name
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {value?.user_name && value.user_name.charAt(0).toUpperCase() + value.user_name.slice(1)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit" sx={{ display: 'flex' }}>
                          <WcIcon sx={{ mr: '2px' }} />
                          Gender
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {value?.user_gender && value.user_gender.charAt(0).toUpperCase() + value.user_gender.slice(1)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit" sx={{ display: 'flex' }}>
                          <PhoneIphoneIcon sx={{ mr: '2px' }} />
                          Phone Number
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {value?.user_phone_number}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit" display="flex">
                          <FlagIcon sx={{ mr: '2px' }} />
                          Nationality
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {value?.user_nationality &&
                                value.user_nationality.charAt(0).toUpperCase() + value.user_nationality.slice(1)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography display="flex" variant="subtitle1" color="inherit">
                          <AccessTimeIcon sx={{ mr: '2px' }} />
                          Experience In
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {value?.user_role_exp}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography display="flex" variant="subtitle1" color="inherit">
                          <LocationOnIcon sx={{ mr: '2px' }} />
                          Lives In
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {value?.user_area}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography display="flex" variant="subtitle1" color="inherit">
                          <DescriptionIcon sx={{ mr: '2px' }} />
                          Resume
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            {value?.user_resume ? (
                              <a href={value.user_resume} download>
                                <IconButton color="secondary" component="span">
                                  <Download />
                                </IconButton>
                              </a>
                            ) : (
                              <Typography variant="subtitle1" color="grey" sx={{ my: 1 }}>
                                No resume available
                              </Typography>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PopularCard;
