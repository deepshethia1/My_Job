import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import PopularCard from './PopularCard';
import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from 'store';
import { viewJobList } from 'store/thunk/dashboardThunk';
import MainCard from 'ui-component/cards/MainCard';

const Dashboard = () => {
  const { jobsList } = useAppSelector((state) => state.dashboardSlice);
  const userData = useSelector((state) => state.authorization.userData);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const data = {
      id: userData?.id
    }
    dispatch(viewJobList(data));
  }, []);

  useEffect(() => {
    if (jobsList) {
      setLoading(false);
    }
  }, [jobsList]);
  

  return (
    <Grid container spacing={gridSpacing}>
      {jobsList && jobsList.length > 0 ? (
        jobsList.map((value) => (
          <Grid item key={value.id} xs={12} md={4}>
            <PopularCard value={value} isLoading={isLoading} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12} md={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <MainCard>
            <Typography variant="h5" align="center">
              No jobs listed yet
            </Typography>
          </MainCard>
        </Grid>
      )}
    </Grid>
  );
};

export default Dashboard;
