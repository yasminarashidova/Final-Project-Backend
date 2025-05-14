/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const StyledCardMedia = styled(CardMedia)({
  height: 300,
});

const StyledButton = styled(Button)({
  marginTop: '10px',
  marginRight: '10px',
});

const StudentView = (props) => {
  const { student, campus, deleteStudent } = props;

  if (!student) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <StyledCardMedia
              image={student.imageUrl || 'https://via.placeholder.com/300x200'}
              title={`${student.firstName} ${student.lastName}`}
            />
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
              <Box>
                <StyledButton
                  component={Link}
                  to={`/editstudent/${student.id}`}
                  variant="contained"
                  color="primary"
                >
                  Edit Student
                </StyledButton>
                <StyledButton
                  onClick={() => deleteStudent(student.id)}
                  variant="contained"
                  color="error"
                >
                  Delete Student
                </StyledButton>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Enrolled Campus
          </Typography>
          {campus ? (
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {campus.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {campus.address}
                </Typography>
                <StyledButton
                  component={Link}
                  to={`/campus/${campus.id}`}
                  variant="outlined"
                  size="small"
                >
                  View Campus
                </StyledButton>
              </CardContent>
            </Card>
          ) : (
            <Typography>Not enrolled in any campus</Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentView;