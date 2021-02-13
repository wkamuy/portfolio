import { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 10,
      marginBottom: 10,
      width: 200,
      '&:hover': {
        boxShadow: '0 14px 16px rgba(0,0,0,3)',
      },
    },
    media: {
      height: 97,
    },
    cardContents: {
      display: '-webkit-box',
      height: 79,
      overflow: 'hidden',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
    },
    cardActions: {
      display: 'block',
      height: 65,
      overflow: 'hidden',
    },
    chip: {
      margin: 2,
    },
    link: {
      textDecoration: 'none',
      color: 'white',
    },
  }),
);

type CustomCardProps = {
  cardMediaImage: string;
  cardMediaTitle: string;
  cardContent: string;
  cardLink: string;
  chipLabel: string[];
};

const CustomCard: FC<CustomCardProps> = ({
  cardMediaImage,
  cardMediaTitle,
  cardContent,
  cardLink,
  chipLabel,
}) => {
  const classes = useStyles();

  return (
    <Link className={classes.link} href={cardLink} underline="none">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              cardMediaImage || `${process.env.PUBLIC_URL}/img/works_image.png`
            }
            title={cardMediaTitle}
          />
          <CardContent className={classes.cardContents}>
            <Typography gutterBottom variant="body2" component="h6">
              {cardContent}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions className={classes.cardActions}>
          {chipLabel.map((val, idx) => (
            <Chip
              key={val + idx.toString()}
              className={classes.chip}
              variant="outlined"
              size="small"
              label={val}
            />
          ))}
        </CardActions>
      </Card>
    </Link>
  );
};

export default CustomCard;
