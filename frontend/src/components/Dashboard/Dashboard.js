import React from "react";
import './dashboard.css'
const Dashboard = () => {
  return (
    <div className="dashboard">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="rest_name" className="form-label">
          Restaurants Name
          </label>
          <input type="text" className="form-control" id="rest_name" />
        </div>
        <div className="col-md-6">
          <label htmlFor="rest_type" className="form-label">
          Restaurants Type
          </label>
          <input type="text" className="form-control" id="rest_type" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add Restaurants 
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
