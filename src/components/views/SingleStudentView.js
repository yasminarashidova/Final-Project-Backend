import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
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
  button: {
    margin: theme.spacing(1),
  },
  list: {
    marginTop: theme.spacing(2),
  },
}));

const SingleStudentView = ({ student, onDelete }) => {
  const classes = useStyles();

  if (!student) {
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
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {student.firstName} {student.lastName}
              </Typography>
              <Typography variant="body1" paragraph>
                Email: {student.email}
              </Typography>
              <Typography variant="body1" paragraph>
                GPA: {student.gpa}
              </Typography>
              <Button
                component={Link}
                to={`/students/${student.id}/edit`}
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Edit Student
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={onDelete}
              >
                Delete Student
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Enrolled Campus
          </Typography>
          {student.campus ? (
            <List className={classes.list}>
              <ListItem
                button
                component={Link}
                to={`/campuses/${student.campus.id}`}
              >
                <ListItemText
                  primary={student.campus.name}
                  secondary={student.campus.address}
                />
              </ListItem>
            </List>
          ) : (
            <Typography variant="body1">Not enrolled in any campus.</Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleStudentView; 