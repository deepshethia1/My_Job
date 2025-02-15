import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import PopularCard from './PopularCard';
import { gridSpacing } from 'store/constant';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store';
import { ViewJobApplied } from 'store/thunk/dashboardThunk';
import { useLocation } from 'react-router';
import Typography from 'onepirate/modules/components/Typography';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const ViewAppliedJobs = () => {
  const locations = useLocation();
  const jobsList = useAppSelector((state) => state.dashboardSlice?.viewJobApplied);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  console.log('jobsList', jobsList);
  useEffect(() => {
    if (locations?.state?.id) {
      const data = {
        id: locations?.state?.id
      };
      dispatch(ViewJobApplied(data));
    }
  }, [locations]);

  useEffect(() => {
    if (jobsList) {
      setLoading(false);
    }
  }, [jobsList]);
  return (
    <Grid
      container
      spacing={gridSpacing}
      // Set minimum height to center vertically
    >
      {jobsList.length > 0 ? (
        jobsList?.map((value) => (
          <Grid item key={value.id} xs={12} md={4}>
            <PopularCard value={value} isLoading={isLoading} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12} md={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <MainCard>
            <Typography variant="h5" align="center">
              This listing has not received any applications yet.
            </Typography>
          </MainCard>
        </Grid>
      )}
    </Grid>
  );
};

export default ViewAppliedJobs;
