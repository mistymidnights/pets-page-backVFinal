import React from 'react';
import './SearchBar.css'

const SearchBar = ({setFilterPet}) => {
  return (
    <div className='searchbar_container'>
        <input type="text" id='search' className='searchbar' onChange={() => setFilterPet(search.value.toLowerCase())} placeholder="Search by name or type" />
    </div>
  )
}

export default SearchBar