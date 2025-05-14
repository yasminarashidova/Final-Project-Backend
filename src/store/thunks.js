/*==================================================
/src/store/thunks.js

It contains all Thunk Creators and Thunks.
================================================== */
import axios from 'axios';
import * as ac from './actions/actionCreators';

const API_BASE_URL = 'http://localhost:5001/api';

// Campus Thunks
export const fetchAllCampusesThunk = () => async (dispatch) => {
  try {
    console.log('Fetching all campuses...');
    const { data } = await axios.get(`${API_BASE_URL}/campuses`);
    console.log('Campuses fetched:', data);
    dispatch(ac.fetchAllCampuses(data));
  } catch (error) {
    console.error('Error fetching campuses:', error.response || error);
  }
};

export const fetchCampusThunk = (campusId) => async (dispatch) => {
  try {
    console.log('Fetching campus:', campusId);
    const { data } = await axios.get(`${API_BASE_URL}/campuses/${campusId}`);
    console.log('Campus fetched:', data);
    dispatch(ac.fetchCampus(data));
  } catch (error) {
    console.error('Error fetching campus:', error.response || error);
  }
};

export const addCampusThunk = (campus) => async (dispatch) => {
  try {
    console.log('Adding campus:', campus);
    const { data } = await axios.post(`${API_BASE_URL}/campuses`, campus);
    console.log('Campus added:', data);
    dispatch(ac.addCampus(data));
    return data;
  } catch (error) {
    console.error('Error adding campus:', error.response || error);
    throw error;
  }
};

export const editCampusThunk = (campusId, campus) => async (dispatch) => {
  try {
    console.log('Editing campus:', campusId, campus);
    const { data } = await axios.put(`${API_BASE_URL}/campuses/${campusId}`, campus);
    console.log('Campus edited:', data);
    dispatch(ac.editCampus(data));
  } catch (error) {
    console.error('Error editing campus:', error.response || error);
  }
};

export const deleteCampusThunk = (campusId) => async (dispatch) => {
  try {
    console.log('Deleting campus:', campusId);
    await axios.delete(`${API_BASE_URL}/campuses/${campusId}`);
    console.log('Campus deleted:', campusId);
    dispatch(ac.deleteCampus(campusId));
  } catch (error) {
    console.error('Error deleting campus:', error.response || error);
  }
};

// Student Thunks
export const fetchAllStudentsThunk = () => async (dispatch) => {
  try {
    console.log('Fetching all students...');
    const { data } = await axios.get(`${API_BASE_URL}/students`);
    console.log('Students fetched:', data);
    dispatch(ac.fetchAllStudents(data));
  } catch (error) {
    console.error('Error fetching students:', error.response || error);
  }
};

export const fetchStudentThunk = (studentId) => async (dispatch) => {
  try {
    console.log('Fetching student:', studentId);
    const { data } = await axios.get(`${API_BASE_URL}/students/${studentId}`);
    console.log('Student fetched:', data);
    dispatch(ac.fetchStudent(data));
  } catch (error) {
    console.error('Error fetching student:', error.response || error);
  }
};

export const addStudentThunk = (student) => async (dispatch) => {
  try {
    console.log('Adding student:', student);
    const { data } = await axios.post(`${API_BASE_URL}/students`, student);
    console.log('Student added:', data);
    dispatch(ac.addStudent(data));
    return data;
  } catch (error) {
    console.error('Error adding student:', error.response || error);
    throw error;
  }
};

export const editStudentThunk = (studentId, student) => async (dispatch) => {
  try {
    console.log('Editing student:', studentId, student);
    const { data } = await axios.put(`${API_BASE_URL}/students/${studentId}`, student);
    console.log('Student edited:', data);
    dispatch(ac.editStudent(data));
  } catch (error) {
    console.error('Error editing student:', error.response || error);
  }
};

export const deleteStudentThunk = (studentId) => async (dispatch) => {
  try {
    console.log('Deleting student:', studentId);
    await axios.delete(`${API_BASE_URL}/students/${studentId}`);
    console.log('Student deleted:', studentId);
    dispatch(ac.deleteStudent(studentId));
  } catch (error) {
    console.error('Error deleting student:', error.response || error);
  }
};
