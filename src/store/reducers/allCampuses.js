import { FETCH_ALL_CAMPUSES, ADD_CAMPUS, EDIT_CAMPUS, DELETE_CAMPUS } from '../actions/actionTypes';

const initialState = [];

const allCampuses = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CAMPUSES:
      return action.payload;
    case ADD_CAMPUS:
      return [...state, action.payload];
    case EDIT_CAMPUS:
      return state.map(campus => 
        campus.id === action.payload.id ? action.payload : campus
      );
    case DELETE_CAMPUS:
      return state.filter(campus => campus.id !== action.payload);
    default:
      return state;
  }
};

export default allCampuses; 