/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)({
  textAlign: 'center',
  padding: '40px 0',
});

const HomePageView = () => {
  return (
    <StyledContainer>
      <Typography variant="h2" gutterBottom>
        Welcome to the Campus Management System
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Manage your campuses and students with ease
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body1" paragraph>
          This system allows you to:
        </Typography>
        <Typography variant="body1" component="ul" sx={{ listStyle: 'none', p: 0 }}>
          <li>• View and manage all campuses</li>
          <li>• Add, edit, and remove students</li>
          <li>• Track student enrollment</li>
          <li>• Monitor campus details and statistics</li>
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default HomePageView;