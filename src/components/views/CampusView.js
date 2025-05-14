/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
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

const CampusView = (props) => {
  const { campus, students, deleteCampus, deleteStudent } = props;

  if (!campus) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <StyledCardMedia
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
              <Box>
                <StyledButton
                  component={Link}
                  to={`/editcampus/${campus.id}`}
                  variant="contained"
                  color="primary"
                >
                  Edit Campus
                </StyledButton>
                <StyledButton
                  onClick={() => deleteCampus(campus.id)}
                  variant="contained"
                  color="error"
                >
                  Delete Campus
                </StyledButton>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Students at this Campus
          </Typography>
          {students.length === 0 ? (
            <Typography>No students enrolled at this campus.</Typography>
          ) : (
            <Grid container spacing={2}>
              {students.map((student) => (
                <Grid item xs={12} key={student.id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">
                        {student.firstName} {student.lastName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Email: {student.email}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        GPA: {student.gpa}
                      </Typography>
                      <Box>
                        <StyledButton
                          component={Link}
                          to={`/student/${student.id}`}
                          variant="outlined"
                          size="small"
                        >
                          View Details
                        </StyledButton>
                        <StyledButton
                          onClick={() => deleteStudent(student.id)}
                          variant="outlined"
                          color="error"
                          size="small"
                        >
                          Remove Student
                        </StyledButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CampusView;