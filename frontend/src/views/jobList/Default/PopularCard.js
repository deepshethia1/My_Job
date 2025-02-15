import PropTypes from 'prop-types';

// material-ui
import { Button, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import ApartmentIcon from '@mui/icons-material/Apartment';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoneyIcon from '@mui/icons-material/Money';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EventIcon from '@mui/icons-material/Event';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setApplyJob } from 'store/thunk/dashboardThunk';
// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ value, isLoading }) => {
  const dispatch = useDispatch()
  const startDate = moment(value?.startDate).format('DD/MM/YYYY');
  const endDate = moment(value?.end_date).format('DD/MM/YYYY');
  const handleApply = ( value) => {
    dispatch(setApplyJob({jobId: value?.id}))
  }
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
              <Divider sx={{ my: 1.5, width: '100%' }} />
              <Grid item xs={12}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit" sx={{ display: 'flex' }}>
                          <ApartmentIcon sx={{ mr: '2px' }} /> Company
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {value?.company_name}
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
                          <EngineeringIcon sx={{ mr: '2px' }} />
                          Role
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {value?.role}
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
                          <LocationOnIcon sx={{ mr: '2px' }} />
                          Location
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {value?.location}
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
                          <MoneyIcon sx={{ mr: '2px' }} />
                          Pay
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {value?.pay} {value?.currency} / {value?.work_day}
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
                          Duration
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {value?.duration}
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
                          <DateRangeIcon sx={{ mr: '2px' }} />
                          Dates
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {`${startDate} - ${endDate}`}
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
                          <EventIcon sx={{ mr: '2px' }} />
                          Weekly off
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {value?.weekly}
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
                          <AddToPhotosIcon sx={{ mr: '2px' }} />
                          Additional Details
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="grey">
                              {value?.additional_details}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button variant='contained'  onClick={() => handleApply(value)} disabled={value?.applied == 1}>
              {value?.applied == 0 ? 'Apply' : 'Applied'}
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PopularCard;
