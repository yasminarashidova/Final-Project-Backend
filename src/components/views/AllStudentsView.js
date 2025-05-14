/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
});

const StyledButton = styled(Button)({
  marginTop: '10px',
});

const AllStudentsView = (props) => {
  const { allStudents = [] } = props;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        All Students
      </Typography>
      <Button
        component={Link}
        to="/students/add"
        variant="contained"
        color="primary"
        sx={{ mb: 3 }}
      >
        Add New Student
      </Button>
      {allStudents.length === 0 ? (
        <Typography>No students found.</Typography>
      ) : (
        <Grid container spacing={3}>
          {allStudents.map((student) => (
            <Grid item xs={12} sm={6} md={4} key={student.id}>
              <StyledCard>
                <StyledCardMedia
                  image={student.imageUrl || 'https://via.placeholder.com/300x200'}
                  title={`${student.firstName} ${student.lastName}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {student.firstName} {student.lastName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: {student.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    GPA: {student.gpa}
                  </Typography>
                  <StyledButton
                    component={Link}
                    to={`/students/${student.id}`}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    View Details
                  </StyledButton>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default AllStudentsView;