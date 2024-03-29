import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  

  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase()
    navigate(`/search-result?query=${searchTermLowerCase}`);
  };

  return (
    <div className='home'>
      <div className="form-input">
        <h2>Digite sua criptomoeda:</h2>
        <label htmlFor="search"></label>
        <input type="text" name="search" id="search" onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={handleSearch}><BsSearch className='searchIcon' /></button>
      </div>
    </div>
  );
}

export default Home;
