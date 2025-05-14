import * as actionTypes from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All Campuses
export const fetchAllCampuses = (campuses) => ({
  type: actionTypes.FETCH_ALL_CAMPUSES,
  payload: campuses,
});

//Single Campus
export const fetchCampus = (campus) => ({
  type: actionTypes.FETCH_CAMPUS,
  payload: campus,
});

//All Students
export const fetchAllStudents = (students) => ({
  type: actionTypes.FETCH_ALL_STUDENTS,
  payload: students,
});

export const addStudent = (student) => ({
  type: actionTypes.ADD_STUDENT,
  payload: student,
});

export const deleteStudent = (studentId) => ({
  type: actionTypes.DELETE_STUDENT,
  payload: studentId,
});

export const editStudent = (student) => ({
  type: actionTypes.EDIT_STUDENT,
  payload: student,
});

//Single Student
export const fetchStudent = (student) => ({
  type: actionTypes.FETCH_STUDENT,
  payload: student,
});

// Campus Action Creators
export const addCampus = (campus) => ({
  type: actionTypes.ADD_CAMPUS,
  payload: campus,
});

export const editCampus = (campus) => ({
  type: actionTypes.EDIT_CAMPUS,
  payload: campus,
});

export const deleteCampus = (campusId) => ({
  type: actionTypes.DELETE_CAMPUS,
  payload: campusId,
});