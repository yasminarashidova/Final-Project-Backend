/*==================================================
Header.js

It contains the Header component to be displayed on every page.
The header contains navigation links to every other page.
================================================== */
// Import "material" library for building UI with React components
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  flexGrow: 1,
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledButton = styled(Button)({
  color: 'white',
  textDecoration: 'none',
});

// Header component, displayed on every page
// Links to every other page
const Header = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">
          Campus Management System
        </Typography>
        <div>
          <StyledButton component={Link} to="/campuses">
            All Campuses
          </StyledButton>
          <StyledButton component={Link} to="/students">
            All Students
          </StyledButton>
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
