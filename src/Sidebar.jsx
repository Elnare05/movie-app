import React from 'react';
import "./Sidebar.css";
function Sidebar({ searchTerm, setSearchTerm, fetchMovies }) {
  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='search' onClick={() => fetchMovies(searchTerm.trimStart())}>Search</button>
    </div>
  );
}
export default Sidebar;
