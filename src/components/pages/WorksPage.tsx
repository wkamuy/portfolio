import { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CommonTemplate from '../templates/CommonTemplate';
import CustomCard from '../molecules/CustomCard';

const WorksPage: FC = () => {
  const grid1 = Array.from({ length: 3 }, (v: undefined, i: number) => i);
  const grid2 = Array.from({ length: 6 }, (v: undefined, i: number) => i);

  const customCard = grid1.map((val1, idx1) => (
    <Grid container alignItems="center" justify="center" key={idx1.toString()}>
      {grid2.map((val, idx) => (
        <Grid item xs={2} key={`val${idx.toString()}`}>
          <Grid container justify="center" alignItems="center">
            <CustomCard />
          </Grid>
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
