import React, { useState } from 'react';
import { Typography, TextField, Button, Box, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const FormContainer = styled(Box)({
  width: '500px',
  backgroundColor: '#f0f0f5',
  borderRadius: '5px',
  margin: 'auto',
  padding: '20px',
});

const StyledTextField = styled(TextField)({
  width: '100%',
  marginBottom: '20px',
});

const EditStudentView = (props) => {
  const { student, allCampuses, handleSubmit } = props;
  const [firstName, setFirstName] = useState(student.firstName || '');
  const [lastName, setLastName] = useState(student.lastName || '');
  const [email, setEmail] = useState(student.email || '');
  const [gpa, setGpa] = useState(student.gpa || '');
  const [imageUrl, setImageUrl] = useState(student.imageUrl || '');
  const [campusId, setCampusId] = useState(student.campusId || '');

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit({
      firstName,
      lastName,
      email,
      gpa,
      imageUrl,
      campusId: campusId || null,
    });
  };

  return (
    <FormContainer>
      <Typography variant="h4" gutterBottom>
        Edit Student
      </Typography>
      <form onSubmit={onSubmit}>
        <StyledTextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <StyledTextField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <StyledTextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StyledTextField
          label="GPA"
          type="number"
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
          inputProps={{ step: "0.01", min: "0", max: "4" }}
        />
        <StyledTextField
          label="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <StyledTextField
          select
          label="Campus"
          value={campusId}
          onChange={(e) => setCampusId(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {allCampuses.map((campus) => (
            <MenuItem key={campus.id} value={campus.id}>
              {campus.name}
            </MenuItem>
          ))}
        </StyledTextField>
        <Button variant="contained" color="primary" type="submit">
          Save Changes
        </Button>
      </form>
    </FormContainer>
  );
};

export default EditStudentView; 