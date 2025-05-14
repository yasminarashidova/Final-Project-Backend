/*==================================================
NewStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addStudentThunk, fetchAllCampusesThunk } from '../../store/thunks';
import NewStudentView from '../views/NewStudentView';
import Header from './Header';

const NewStudentContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allCampuses = useSelector((state) => state.allCampuses);

  useEffect(() => {
    dispatch(fetchAllCampusesThunk());
  }, [dispatch]);

  const handleAddStudent = async (studentData) => {
    try {
      await dispatch(addStudentThunk(studentData));
      history.push('/students');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div>
      <Header />
      <NewStudentView addStudent={handleAddStudent} allCampuses={allCampuses} />
    </div>
  );
};

export default NewStudentContainer;