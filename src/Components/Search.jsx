import React from 'react'

const Search = ({city,handleOnChange, handleSearch}) => {
  return (
    <div className="upper-card">
          <h1>Weather App</h1>
          <div className="upper-inner-div">
            <label htmlFor="search-engine">Enter city</label>

            <input
              type="text"
              id="search-engine"
              value={city}
              onChange={(e) => handleOnChange(e)}
            />

            <button
              onClick={() => {
                handleSearch();
              }}
            >
              Search
            </button>
          </div>
  </div>
  )
}

export default Search