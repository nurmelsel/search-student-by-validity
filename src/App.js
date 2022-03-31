import React, {useState } from "react";
import "./App.css";
import { STUDENTS } from "./studentList";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";

// DO NOT CHANGE THIS FUNCTION, IT RETURNS TRUE OR FALSE ACCORDING TO GIVEN DATES
// joiningDate COMES FROM input-date, validityDate COMES FROM studentList,
function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function App() {
  const [residentsList, setresidentsList] = useState([]);
  const [search, setSearch] = useState({ studentName: "", joiningDate: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const filteredArray = STUDENTS.filter(
    (item) => item.name.toLowerCase() === search.studentName.toLowerCase()
  );

  const addStudent = () => {
    if (filteredArray.length > 0) {
      if (checkValidity(search.joiningDate, filteredArray[0].validityDate)) {
        setresidentsList([...residentsList, search.studentName]);
      } else {
        setErrorMessage(` Sorry,${search.studentName}'s validity has expired!`);
        setTimeout(() => {
          setErrorMessage("");
          setSearch({ studentName: "", joiningDate: "" });
        }, 5000);
      }
    } else {
      setErrorMessage(`Sorry, ${search.studentName} is not a verified student`);
      setTimeout(() => {
        setErrorMessage("");
        setSearch({ studentName: "", joiningDate: "" });
      }, 5000);
    }
  };
  return (
    <div className="App">
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search
          search={search}
          handleChange={handleChange}
          addStudent={addStudent}
        />
        <Error errorMessage={errorMessage} />

        <ResidentsList residentsList={residentsList} />
      </div>
    </div>
  );
}

export default App;
