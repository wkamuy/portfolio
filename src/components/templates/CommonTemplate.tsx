import { FC } from 'react';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Copyright from '../molecules/Copyright';
import MenuBar from '../../containers/molecules/MenuBar';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#212121',
    },
    type: 'dark',
  },
});

type CommonTemplateProps = {
  children?: React.ReactNode;
};

const CommonTemplate: FC<CommonTemplateProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MenuBar title="WKAMUY" />
    {children}
    <Box>
      <Copyright authorName="wkamuy" />
    </Box>
  </ThemeProvider>
);

export default CommonTemplate;
