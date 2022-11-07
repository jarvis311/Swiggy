import React from 'react'

const AddMoreProduct = () => {
  return (
    <div className="dashboard">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="rest_name" className="form-label">
            Product Name
          </label>
          <input type="text" className="form-control" id="rest_name" />
        </div>
        <div className="col-md-6">
          <label htmlFor="rest_type" className="form-label">
            Product Price
          </label>
          <input type="text" className="form-control" id="rest_type" />
        </div>
        <div className="col-md-6">
          <label htmlFor="rest_type" className="form-label">
            Product Decription
          </label>
          <input type="text" className="form-control" id="rest_type" />
        </div>
        <div className="col-md-6">
          <label htmlFor="rest_type" className="form-label">
            Offer
          </label>
          <input type="text" className="form-control" id="rest_type" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add Restaurants 
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddMoreProduct