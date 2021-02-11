import { FC } from 'react';
import { Link as LinkRouter } from 'react-router-dom/';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import CreateIcon from '@material-ui/icons/Create';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

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
    list: {
      width: 170,
    },
    link: {
      textDecoration: 'none',
      color: 'white',
    },
  }),
);

type MenuBarProps = {
  title?: string;
  isOpen?: boolean;
  open?: (event: React.KeyboardEvent | React.MouseEvent) => void;
  close?: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

const MenuBar: FC<MenuBarProps> = ({
  title,
  isOpen = false,
  open = () => undefined,
  close = () => undefined,
}) => {
  const classes = useStyles();

  // List of Side Bar
  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={close}
      onKeyDown={close}
    >
      <List>
        <LinkRouter className={classes.link} to="/portfolio">
          <ListItem button>
            <ListItemIcon>
              <PermIdentityIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </LinkRouter>
        <Divider variant="middle" />
        {/* <LinkRouter className={classes.link} to="/works">
          <ListItem button>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Works" />
          </ListItem>
        </LinkRouter> */}
        <Divider variant="middle" />
        <Link
          className={classes.link}
          href="https://wkamuy.hatenablog.com/"
          underline="none"
        >
          <ListItem button>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
        </Link>
        <Divider variant="middle" />
      </List>
    </div>
  );

  return (
    <>
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
            <IconButton
              className={classes.iconButton}
              aria-label="menu"
              onClick={open}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </Box>
          <LinkRouter className={classes.link} to="/portfolio">
            <Typography variant="h6" className={classes.title}>
              {title}.PAGES
            </Typography>
          </LinkRouter>
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
            <Button className={classes.menuButton}>
              <LinkRouter className={classes.link} to="/portfolio">
                About
              </LinkRouter>
            </Button>
            {/* <Button className={classes.menuButton}>
              <LinkRouter className={classes.link} to="/works">
                Works
              </LinkRouter>
            </Button> */}
            <Button className={classes.menuButton}>
              <Link
                className={classes.link}
                href="https://wkamuy.hatenablog.com/"
                underline="none"
              >
                Blog
              </Link>
            </Button>
          </Box>
          <Box className={classes.snsIconBox}>
            <Link
              className={classes.link}
              href="https://twitter.com/wkamuy1"
              underline="none"
            >
              <IconButton>
                <TwitterIcon />
              </IconButton>
            </Link>
            <Link
              className={classes.link}
              href="https://github.com/wkamuy"
              underline="none"
            >
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isOpen} onClose={close}>
        {list()}
      </Drawer>
    </>
  );
};

export default MenuBar;
