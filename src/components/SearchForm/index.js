import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.roles array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="role">role Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="role"
          list="roles"
          type="text"
          className="form-control"
          placeholder="Type in a Employee role to begin"
          id="role"
        />
        <datalist id="roles">
          {props.roles.map(role => (
            <option value={role} key={role} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
