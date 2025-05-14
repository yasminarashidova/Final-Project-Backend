import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h3" component="h1" gutterBottom className={classes.title}>
        Welcome to Campus Management
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Campuses
            </Typography>
            <Typography variant="body1" paragraph>
              View and manage all campuses in the system.
            </Typography>
            <Button
              component={Link}
              to="/campuses"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              View Campuses
            </Button>
            <Button
              component={Link}
              to="/campuses/add"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Add Campus
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Students
            </Typography>
            <Typography variant="body1" paragraph>
              View and manage all students in the system.
            </Typography>
            <Button
              component={Link}
              to="/students"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              View Students
            </Button>
            <Button
              component={Link}
              to="/students/add"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Add Student
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home; 