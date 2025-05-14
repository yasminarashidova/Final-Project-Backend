import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllStudentsThunk, deleteStudentThunk } from "../../store/thunks";
import AllStudentsView from "../views/AllStudentsView";
import { useNavigate } from "react-router-dom";

const AllStudentsContainer = () => {
  const students = useSelector((state) => state.allStudents);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllStudentsThunk());
  }, [dispatch]);

  const deleteStudent = async (id) => {
    await dispatch(deleteStudentThunk(id));
    navigate("/students");
  };

  return <AllStudentsView students={students} deleteStudent={deleteStudent} />;
};

export default AllStudentsContainer;
