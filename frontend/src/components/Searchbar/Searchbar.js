import React, { useState } from "react";
import './searchbar.css'
const Searchbar = ({setSTerm}) => {
    const [term, setTerm] = useState('')

    const handleOnChange = (e) => {
           setTerm(e.target.value) 
           setSTerm(e.target.value)
    }
  return (
    <form className="d-flex searchbar container">
      <input 
        onChange={handleOnChange}
        className="form-control me-2 my-4"
        type="search"
        placeholder="Search food or resturant.."
        aria-label="Search"
      />
    </form>
  );
};

export default Searchbar;
