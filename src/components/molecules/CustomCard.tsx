import { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 230,
    },
    media: {
      height: 100,
    },
    contents: {
      height: 150,
    },
  }),
);

const MediaCard: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/984188/6388c9f9-296c-4f7d-cc7a-4281fb9508c8.png"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.contents}>
          <Typography gutterBottom variant="body2" component="h6">
            英語弱者がTeamsで英語ミーティングするときに簡単かつ最低限できること
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Chip label="aaaa" />
      </CardActions>
    </Card>
  );
};

export default MediaCard;