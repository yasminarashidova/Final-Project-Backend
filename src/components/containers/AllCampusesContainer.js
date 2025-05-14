/*==================================================
/src/components/containers\AllCampusesContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCampusesThunk } from '../../store/thunks';
import AllCampusesView from '../views/AllCampusesView';
import Header from './Header';

const AllCampusesContainer = () => {
  const dispatch = useDispatch();
  const allCampuses = useSelector((state) => state.allCampuses);

  useEffect(() => {
    dispatch(fetchAllCampusesThunk());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <AllCampusesView allCampuses={allCampuses} />
    </div>
  );
};

export default AllCampusesContainer;