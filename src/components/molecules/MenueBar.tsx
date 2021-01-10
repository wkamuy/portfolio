import { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      // backgroundColor: 'transparent',
      backgroundColor: '#212121',
    },
    toolBar: {
      color: 'white',
    },
    iconButton: {
      marginRight: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(1),
      textTransform: 'none',
    },
    menuIcon: {
      color: 'white',
    },
    menuBox: {},
    title: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
  }),
);

const MenueBar: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Box
          display={{
            xs: 'block',
            sm: 'block',
            md: 'none',
            lg: 'none',
            xl: 'none',
          }}
        >
          <IconButton
            className={classes.iconButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Box>
        <Typography variant="h6" className={classes.title}>
          {/* FIXME:  name = &apos;Takuma Sasaki&apos; */}
          TAKUMA.PAGES
        </Typography>
        <Box
          marginLeft="20px"
          display={{
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block',
          }}
        >
          <Button color="inherit" className={classes.menuButton}>
            About
          </Button>
          <Button color="inherit" className={classes.menuButton}>
            Blog
          </Button>
          <Button color="inherit" className={classes.menuButton}>
            Contributions
          </Button>
        </Box>
        <Box marginLeft="auto">
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit">
            <GitHubIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenueBar;
