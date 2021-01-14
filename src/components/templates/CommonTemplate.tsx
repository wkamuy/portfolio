import { FC } from 'react';
import Box from '@material-ui/core/Box';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Copyright from '../molecules/Copyright';
import MenueBar from '../molecules/MenueBar';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#212121',
    },
    type: 'dark',
  },
});

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//     },
//   }),
// );

const CommonTemplate: FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MenueBar title="WKAMUY" />
    <Box>
      <Copyright authorName="wkamuy" />
    </Box>
  </ThemeProvider>
);

export default CommonTemplate;
