import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk } from "../../store/thunks";
import EditStudentView from "../views/EditStudentView";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import React from "react";

const EditStudentContainer = (props) => {
  const { fetchStudent, editStudent, student, match } = props;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchStudent(match.params.id);
  }, [fetchStudent, match.params.id]);

  const handleSubmit = async (student) => {
    await editStudent(id, student);
    history.push(`/student/${id}`);
  };

  return <EditStudentView student={student} handleSubmit={handleSubmit} />;
};

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (id, student) => dispatch(editStudentThunk(id, student)),
  };
};

export default connect(mapState, mapDispatch)(EditStudentContainer); 