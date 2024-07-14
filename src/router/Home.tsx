import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    navigate(`/search-result?query=${searchTermLowerCase}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      handleSearch();
    } else {
      alert('Por favor, insira uma criptomoeda.');
    }
  };

  return (
    <div className='home'>
      <div className="form-input">
        <h2>Digite sua criptomoeda:</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search"></label>
          <input type="text" name="search" id="search" value={searchTerm} onChange={handleChange} required />
          <button type="submit"><BsSearch className='searchIcon' /></button>
        </form>
      </div>
    </div>
  );
}

export default Home;
