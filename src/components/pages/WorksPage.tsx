import { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CommonTemplate from '../templates/CommonTemplate';

const WorksPage: FC = () => (
  <CommonTemplate>
    <Grid container justify="center">
      <Grid item xs={11}>
        <Typography variant="h6">Works</Typography>
      </Grid>
    </Grid>
  </CommonTemplate>
);
export default WorksPage;
