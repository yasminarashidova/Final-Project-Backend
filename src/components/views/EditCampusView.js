import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
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

const EditCampusView = (props) => {
  const { campus, handleSubmit } = props;
  const [name, setName] = useState(campus.name || '');
  const [address, setAddress] = useState(campus.address || '');
  const [description, setDescription] = useState(campus.description || '');
  const [imageUrl, setImageUrl] = useState(campus.imageUrl || '');

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit({
      name,
      address,
      description,
      imageUrl,
    });
  };

  return (
    <FormContainer>
      <Typography variant="h4" gutterBottom>
        Edit Campus
      </Typography>
      <form onSubmit={onSubmit}>
        <StyledTextField
          label="Campus Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <StyledTextField
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <StyledTextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={4}
        />
        <StyledTextField
          label="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Save Changes
        </Button>
      </form>
    </FormContainer>
  );
};

export default EditCampusView; 