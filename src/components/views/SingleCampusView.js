import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  media: {
    height: 300,
  },
  button: {
    margin: theme.spacing(1),
  },
  list: {
    marginTop: theme.spacing(2),
  },
}));

const SingleCampusView = ({ campus, onDelete }) => {
  const classes = useStyles();

  if (!campus) {
    return (
      <Container className={classes.root}>
        <Typography variant="h5">Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              className={classes.media}
              image={campus.imageUrl || 'https://via.placeholder.com/300x200'}
              title={campus.name}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {campus.name}
              </Typography>
              <Typography variant="body1" paragraph>
                {campus.address}
              </Typography>
              <Typography variant="body1" paragraph>
                {campus.description}
              </Typography>
              <Button
                component={Link}
                to={`/campuses/${campus.id}/edit`}
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Edit Campus
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={onDelete}
              >
                Delete Campus
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Enrolled Students
          </Typography>
          {campus.students && campus.students.length > 0 ? (
            <List className={classes.list}>
              {campus.students.map((student) => (
                <React.Fragment key={student.id}>
                  <ListItem
                    button
                    component={Link}
                    to={`/students/${student.id}`}
                  >
                    <ListItemText
                      primary={`${student.firstName} ${student.lastName}`}
                      secondary={student.email}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          ) : (
            <Typography variant="body1">No students enrolled.</Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleCampusView; 