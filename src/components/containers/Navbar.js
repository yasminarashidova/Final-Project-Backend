import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            className={classes.title}
          >
            Campus Management
          </Typography>
          <Button
            component={Link}
            to="/campuses"
            color="inherit"
            className={classes.link}
          >
            Campuses
          </Button>
          <Button
            component={Link}
            to="/students"
            color="inherit"
            className={classes.link}
          >
            Students
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar; 