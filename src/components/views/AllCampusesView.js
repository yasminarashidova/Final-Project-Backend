/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import CampusCard from '../cards/CampusCard';
import PropTypes from "prop-types";

const AllCampusesView = ({ allCampuses = [] }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            All Campuses
          </Typography>
          {allCampuses.length === 0 ? (
            <Typography variant="body1">No campuses found.</Typography>
          ) : (
            <Grid container spacing={3}>
              {allCampuses.map((campus) => (
                <Grid item xs={12} sm={6} md={4} key={campus.id}>
                  <CampusCard campus={campus} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button
            component={Link}
            to="/campuses/add"
            variant="contained"
            color="primary"
          >
            Add New Campus
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;