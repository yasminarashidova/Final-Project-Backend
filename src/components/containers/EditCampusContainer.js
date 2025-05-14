import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";
import EditCampusView from "../views/EditCampusView";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import React from "react";

const EditCampusContainer = (props) => {
  const { fetchCampus, editCampus, campus, match } = props;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchCampus(match.params.id);
  }, [fetchCampus, match.params.id]);

  const handleSubmit = async (campus) => {
    await editCampus(id, campus);
    history.push(`/campus/${id}`);
  };

  return <EditCampusView campus={campus} handleSubmit={handleSubmit} />;
};

const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (id, campus) => dispatch(editCampusThunk(id, campus)),
  };
};

export default connect(mapState, mapDispatch)(EditCampusContainer); 