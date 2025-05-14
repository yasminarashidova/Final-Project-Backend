import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addCampusThunk } from '../../store/thunks';
import NewCampusView from '../views/NewCampusView';
import Header from './Header';

const NewCampusContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddCampus = async (campusData) => {
    try {
      console.log('Container: Adding campus:', campusData);
      const result = await dispatch(addCampusThunk(campusData));
      console.log('Container: Campus added successfully:', result);
      return result;
    } catch (error) {
      console.error('Container: Error adding campus:', error);
      throw error;
    }
  };

  return (
    <div>
      <Header />
      <NewCampusView addCampus={handleAddCampus} />
    </div>
  );
};

export default NewCampusContainer; 