import { FC, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useHistory } from 'react-router-dom';
import { initializeGA, GA_ID } from '../../lib/gtatgUtil';
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

const CommonTemplate: FC<CommonTemplateProps> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { listen } = useHistory();

  useEffect(() => {
    if (!GA_ID) return;

    initializeGA(GA_ID);

    const unlisten = listen((location) => {
      if (!window.gtag) return;
      if (!GA_ID) return;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      window.gtag('config', GA_ID, { page_path: location.pathname });
    });

    // eslint-disable-next-line consistent-return
    return unlisten;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuBar title="WKAMUY" />
      {children}
      <Box>
        <Copyright authorName="wkamuy" />
      </Box>
    </ThemeProvider>
  );
};

export default CommonTemplate;
