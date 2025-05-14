import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/containers/Navbar";
import Home from "./components/views/Home";
import AllCampusesContainer from "./components/containers/AllCampusesContainer";
import AllStudentsContainer from "./components/containers/AllStudentsContainer";
import SingleCampusContainer from "./components/containers/SingleCampusContainer";
import SingleStudentContainer from "./components/containers/SingleStudentContainer";
import NewCampusContainer from "./components/containers/NewCampusContainer";
import NewStudentContainer from "./components/containers/NewStudentContainer";
import EditCampusContainer from "./components/containers/EditCampusContainer";
import EditStudentContainer from "./components/containers/EditStudentContainer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campuses" element={<AllCampusesContainer />} />
        <Route path="/students" element={<AllStudentsContainer />} />
        <Route path="/campus/:id" element={<SingleCampusContainer />} />
        <Route path="/student/:id" element={<SingleStudentContainer />} />
        <Route path="/newcampus" element={<NewCampusContainer />} />
        <Route path="/newstudent" element={<NewStudentContainer />} />
        <Route path="/editcampus/:id" element={<EditCampusContainer />} />
        <Route path="/editstudent/:id" element={<EditStudentContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
