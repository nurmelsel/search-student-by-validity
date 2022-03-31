import React from "react";

function Search(props) {
  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            value={props.search.studentName}
            onChange={props.handleChange}
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            name="studentName"
          />{" "}
          <br />
        </div>
      </label>
      <br />
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            value={props.search.joiningDate}
            onChange={props.handleChange}
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
            name="joiningDate"
          />
        </div>
      </label>
      <button
        onClick={() => props.addStudent()}
        type="button"
        data-testid="addBtn"
        className="small mb-0"
      >
        Add
      </button>
    </div>
  );
}

export default Search;
