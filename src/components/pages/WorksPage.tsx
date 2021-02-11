import { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import CommonTemplate from '../templates/CommonTemplate';
import CustomCard from '../molecules/CustomCard';

const WorksPage: FC = () => {
  const grid1 = Array.from({ length: 3 }, (v: undefined, i: number) => i);
  const grid2 = Array.from({ length: 6 }, (v: undefined, i: number) => i);

  const customCard = grid1.map((v1, i1) => (
    <Grid container alignItems="center" justify="center" key={i1.toString()}>
      {grid2.map((v2, i2) => (
        <Grid item xs={2} key={`val${i2.toString()}`}>
          <Grow
            in
            timeout={500 * (i2 + 1) + 500 * i1}
            style={{ transformOrigin: '0 0 0' }}
          >
            <Grid container justify="center" alignItems="center">
              <CustomCard />
            </Grid>
          </Grow>
        </Grid>
      ))}
    </Grid>
  ));

  return (
    <CommonTemplate>
      <Grid container justify="center">
        <Grid item xs={11}>
          <Typography variant="h6">Works</Typography>
          {customCard}
        </Grid>
      </Grid>
    </CommonTemplate>
  );
};
export default WorksPage;
