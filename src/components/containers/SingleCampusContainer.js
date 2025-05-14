import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchCampusThunk, deleteCampusThunk } from '../../store/thunks';
import SingleCampusView from '../views/SingleCampusView';
import Header from './Header';

const SingleCampusContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const campus = useSelector((state) => state.singleCampus);

  useEffect(() => {
    dispatch(fetchCampusThunk(id));
  }, [dispatch, id]);

  const handleDelete = async () => {
    await dispatch(deleteCampusThunk(id));
    history.push('/campuses');
  };

  return (
    <div>
      <Header />
      <SingleCampusView campus={campus} onDelete={handleDelete} />
    </div>
  );
};

export default SingleCampusContainer; 