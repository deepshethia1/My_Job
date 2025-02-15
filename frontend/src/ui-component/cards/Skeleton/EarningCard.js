// material-ui
import { Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

// ==============================|| SKELETON - EARNING CARD ||============================== //

const EarningCard = () => (
  <Card>
    <CardContent>
      <Grid container direction="column">
        <Grid item>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Skeleton sx={{ mt: '10px' }} width={200} height={30} />
            </Grid>
            <Grid item>
              <Skeleton style={{ marginTop: '10px', borderRadius: '10px' }} variant="rectangular" width={34} height={24} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justifyContent="space-between" direction="row">
            <Grid item sx={{ mt: '20px', ml: '20px' }}>
              <Skeleton width={70} height={30} />
            </Grid>
            <Grid item sx={{ mt: '20px' }}>
              <Skeleton width={70} height={30} />
            </Grid>
            <Grid item sx={{ mt: '20px', mr: '30px' }}>
              <Skeleton width={70} height={30} />
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" direction="row">
            <Grid item sx={{ ml: '30px', mt: '10px' }}>
              <Skeleton width={50} height={25} />
            </Grid>
            <Grid item sx={{ mt: '10px' }}>
              <Skeleton width={50} height={25} />
            </Grid>
            <Grid item sx={{ mr: '38px', mt: '10px' }}>
              <Skeleton width={50} height={25} />
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" direction="row">
            <Grid item sx={{ ml: '40px' }}>
              <Skeleton width={30} height={20} />
            </Grid>
            <Grid item>
              <Skeleton width={30} height={20} />
            </Grid>
            <Grid item sx={{ mr: '48px' }}>
              <Skeleton width={30} height={20} />
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" direction="row">
            <Grid item sx={{ ml: '40px', mb: '10px' }}>
              <Skeleton width={30} height={20} />
            </Grid>
            <Grid item sx={{ mb: '10px' }}>
              <Skeleton width={30} height={20} />
            </Grid>
            <Grid item sx={{ mr: '48px', mb: '10px' }}>
              <Skeleton width={30} height={20} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default EarningCard;
