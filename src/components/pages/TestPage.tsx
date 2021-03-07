import { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CommonTemplate from 'components/templates/CommonTemplate';
import ScrollPage from 'components/molecules/ScrollPage';

const useStyles = makeStyles(() =>
  createStyles({
    bottomSnow: {
      opacity: 0,
      animation: '$slideUp 3s forwards',
    },
    '@keyframes slideUp': {
      from: {
        opacity: 0,
        transform: 'translateY(70%)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    fade1: {
      opacity: 0,
      animation: '$fade 2s ease-in-out .2s 1 normal forwards',
    },
    fade2: {
      opacity: 0,
      animation: '$fade 2s ease-in-out .5s 1 normal forwards',
    },
    fade3: {
      opacity: 0,
      animation: '$fade 2s ease-in-out 1s 1 normal forwards',
    },
    fade4: {
      opacity: 0,
      animation: '$fade 2s ease-in-out .7s 1 normal forwards',
    },
    fade5: {
      opacity: 0,
      animation: '$fade 2s ease-in-out 1.2s 1 normal forwards',
    },
    fade6: {
      opacity: 0,
      animation: '$fade 2s ease-in-out 1.7s 1 normal forwards',
    },
    fade7: {
      opacity: 0,
      animation: '$fade 2s ease-in-out .8s 1 normal forwards',
    },
    fade8: {
      opacity: 0,
      animation: '$fade 2s ease-in-out .1s 1 normal forwards',
    },
    fade9: {
      opacity: 0,
      animation: '$fade 2s ease-in-out .7s 1 normal forwards',
    },
    fade10: {
      opacity: 0,
      animation: '$fade 2s ease-in-out 1.3s 1 normal forwards',
    },
    fade11: {
      opacity: 0,
      animation: '$fade 2s ease-in-out 1.9s 1 normal forwards',
    },
    '@keyframes fade': {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
  }),
);

const TestPage: FC = () => {
  const classes = useStyles();

  return (
    <CommonTemplate>
      <Grid container justify="center">
        <Grid item xs={12}>
          <ScrollPage>
            <Grid container justify="center" style={{ height: '100%' }}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box display="flex" justifyContent="center">
                  <Box style={{ background: 'red' }}>aa</Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  style={{ height: '100%' }}
                >
                  <Box style={{ width: '100%', height: '100%' }}>
                    <svg
                      className="bg"
                      style={{ height: '100%', width: '100%' }}
                    >
                      <circle
                        cx="15%"
                        cy="15%"
                        r="10"
                        fill="#ffffffb2"
                        className={classes.fade1}
                      />
                      <circle
                        cx="5%"
                        cy="55%"
                        r="8"
                        fill="#ffffffe5"
                        className={classes.fade2}
                      />
                      <circle
                        cx="20%"
                        cy="65%"
                        r="12"
                        fill="#ffffffe5"
                        className={classes.fade3}
                      />
                      <circle
                        cx="30%"
                        cy="45%"
                        r="5"
                        fill="#ffffff6b"
                        className={classes.fade4}
                      />
                      <circle
                        cx="40%"
                        cy="25%"
                        r="6"
                        fill="#ffffffe5"
                        className={classes.fade5}
                      />
                      <circle
                        cx="50%"
                        cy="60%"
                        r="6"
                        fill="#ffffff6b"
                        className={classes.fade6}
                      />
                      <circle
                        cx="60%"
                        cy="63%"
                        r="6"
                        fill="#ffffffe5"
                        className={classes.fade7}
                      />
                      <circle
                        cx="70%"
                        cy="23%"
                        r="12"
                        fill="#ffffff45"
                        className={classes.fade8}
                      />
                      <circle
                        cx="75%"
                        cy="55%"
                        r="6"
                        fill="#ffffffe5"
                        className={classes.fade9}
                      />
                      <circle
                        cx="85%"
                        cy="25%"
                        r="6"
                        fill="#ffffffb2"
                        className={classes.fade10}
                      />
                      <circle
                        cx="90%"
                        cy="65%"
                        r="12"
                        fill="#ffffff6b"
                        className={classes.fade11}
                      />
                    </svg>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box>
              <img
                src={`${process.env.PUBLIC_URL}/img/portfolio_design_bottom_1.min.svg`}
                alt="test"
                width="100%"
                style={{ position: 'absolute', bottom: 0 }}
                className={classes.bottomSnow}
              />
              <img
                src={`${process.env.PUBLIC_URL}/img/portfolio_design_bottom_2.min.svg`}
                alt="test"
                width="100%"
                style={{ position: 'absolute', bottom: 0 }}
                className={classes.bottomSnow}
              />
            </Box>
          </ScrollPage>
          <ScrollPage style={{ background: 'yellow' }} />
          <ScrollPage style={{ background: 'blue' }} />
        </Grid>
      </Grid>
    </CommonTemplate>
  );
};
export default TestPage;
