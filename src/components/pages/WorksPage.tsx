import { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import worksData from '../../static/works/works.json';
import CommonTemplate from '../templates/CommonTemplate';
import CustomCard from '../molecules/CustomCard';

type blog = {
  image: string;
  imageTitle: string;
  title: string;
  link: string;
  tags: string[];
};

const divideArrIntoPieces = (arr: blog[], n: number) => {
  const arrList = [];
  const idx = 0;
  while (idx < arr.length) {
    arrList.push(arr.splice(idx, idx + n));
  }

  return arrList;
};

const dividedWroksData = divideArrIntoPieces(worksData.blog, 6);

const WorksPage: FC = () => {
  const customCard = dividedWroksData.map((v1, i1) => (
    <Grid container key={v1[i1].title + i1.toString()}>
      {v1.map((v2, i2) => (
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={2}
          xl={2}
          key={v2.title + i2.toString()}
        >
          <Grow
            in
            timeout={500 * (i2 + 1) + 500 * i1}
            style={{ transformOrigin: '0 0 0' }}
          >
            <Grid container justify="center" alignItems="center">
              <CustomCard
                cardMediaImage={v2.image}
                cardMediaTitle={v2.imageTitle}
                cardContent={v2.title}
                cardLink={v2.link}
                chipLabel={v2.tags}
              />
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
