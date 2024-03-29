import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Home from './router/Home.tsx';
import SearchResult from './router/SearchResult.tsx'; 

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search-result" element={<SearchResult />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
