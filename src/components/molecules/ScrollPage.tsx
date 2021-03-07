import { FC } from 'react';
import { Box, createStyles, makeStyles } from '@material-ui/core';
import useWindowDimensions from 'lib/useWindowDimensions';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxHeight: 1200,
      maxWidth: 2000,
      minHeight: 300,
      minWidth: 300,
    },
  }),
);

type windowSize = {
  width: number;
  height: number;
};

type ScrollPageProps = {
  style?: { [key: string]: string | number };
  children?: React.ReactNode;
};

const ScrollPage: FC<ScrollPageProps> = ({ style, children }) => {
  const size: windowSize = useWindowDimensions();
  const heightStyle = { height: size.height };
  const pageStyle = { ...style, ...heightStyle };
  const classes = useStyles();

  return (
    <Box className={classes.root} style={pageStyle}>
      {children}
    </Box>
  );
};

export default ScrollPage;
