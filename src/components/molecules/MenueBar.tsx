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
      backgroundColor: 'transparent',
      boxShadow: 'none',
      position: 'static',
    },
    iconButton: {
      marginRight: theme.spacing(2),
    },
    menuButtonBox: {
      marginLeft: '20px',
    },
    menuButton: {
      marginRight: theme.spacing(1),
      textTransform: 'none',
      color: 'inherit',
    },
    menuIcon: {
      color: 'white',
    },
    title: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    snsIconBox: {
      marginLeft: 'auto',
    },
  }),
);

type MenueBarProps = {
  title: string;
};

const MenueBar: FC<MenueBarProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Box
          display={{
            xs: 'block',
            sm: 'block',
            md: 'none',
            lg: 'none',
            xl: 'none',
          }}
        >
          <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Box>
        {/* TODO: ADD Link to title */}
        <Typography variant="h6" className={classes.title}>
          {title}.PAGES
        </Typography>
        <Box
          display={{
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block',
          }}
          className={classes.menuButtonBox}
        >
          <Button className={classes.menuButton}>About</Button>
          <Button className={classes.menuButton}>Blog</Button>
          <Button className={classes.menuButton}>Contributions</Button>
        </Box>
        <Box className={classes.snsIconBox}>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenueBar;
