import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Home from './router/Home.tsx';
import SearchResult from './router/SearchResult.tsx'; 

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search-result" element={<SearchResult />} />
      </Routes>
    </Router>
  );
} else {
  console.error('Element with id "root" not found.');
}

const script = document.createElement('script');
script.src = './src/js/vanta.net.min.js';
document.body.appendChild(script);
