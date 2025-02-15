// material-ui
import { Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

// ==============================|| SKELETON - EARNING CARD ||============================== //

const DatePicker = () => (
  <Card>
    <CardContent>
      <Grid container direction="column">
        <Grid item>
          <Grid container>
            <Grid item>
              <Skeleton variant="rectangular" width={250} height={20} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default DatePicker;
