import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchStudentThunk, deleteStudentThunk } from '../../store/thunks';
import SingleStudentView from '../views/SingleStudentView';
import Header from './Header';

const SingleStudentContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const student = useSelector((state) => state.singleStudent);

  useEffect(() => {
    dispatch(fetchStudentThunk(id));
  }, [dispatch, id]);

  const handleDelete = async () => {
    await dispatch(deleteStudentThunk(id));
    history.push('/students');
  };

  return (
    <div>
      <Header />
      <SingleStudentView student={student} onDelete={handleDelete} />
    </div>
  );
};

export default SingleStudentContainer; 