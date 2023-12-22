import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import { Routes, Route, Navigate } from "react-router-dom";
import SearchView from './components/SearchView';
import { keyboard } from '@testing-library/user-event/dist/keyboard';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
          console.log(data.results)
        })
    }
  }, [searchText])


  return (
    <div>
      <NavBar  searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home text="Home Page" />}>
        </Route>
        <Route path="/about" element={<AboutView text="About page" />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />

      </Routes>
    </div>
  );
}

export default App;
