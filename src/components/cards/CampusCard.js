import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  media: {
    height: 200,
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const CampusCard = ({ campus }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={campus.imageUrl || 'https://via.placeholder.com/300x200'}
        title={campus.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {campus.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {campus.address}
        </Typography>
        <Button
          component={Link}
          to={`/campuses/${campus.id}`}
          variant="contained"
          color="primary"
          fullWidth
          className={classes.button}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default CampusCard; 