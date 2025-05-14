import {
  FETCH_ALL_STUDENTS,
  ADD_STUDENT,
  EDIT_STUDENT,
  DELETE_STUDENT,
} from '../actions/actionTypes';

const initialState = [];

const allStudentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...state, action.payload];
    case EDIT_STUDENT:
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.payload);
    default:
      return state;
  }
};

export default allStudentsReducer; 