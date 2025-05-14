import { connect } from "react-redux";
import { addCampusThunk } from "../../store/thunks";
import AddCampusView from "../views/AddCampusView";
import { useHistory } from "react-router-dom";
import React from "react";

const AddCampusContainer = (props) => {
  const history = useHistory();

  const handleSubmit = async (campus) => {
    await props.addCampus(campus);
    history.push("/campuses");
  };

  return <AddCampusView handleSubmit={handleSubmit} />;
};

const mapDispatch = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
  };
};

export default connect(null, mapDispatch)(AddCampusContainer); 