import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import ShortlistedMovies from './components/ShortlistedMovies';
import { MyContext } from './MyContext';



const App = () => {
  const [ data, setdata ] = useState([]);
  const api_key = '42fff432b96c233d330636f19541f13f';
  const baseUrl = "https://api.themoviedb.org/3";
  const popularMoviesUrl = `${baseUrl}/movie/popular?api_key=${api_key}`;
  
  const [text,setText]=useState("this is from app.js"); 

  async function fetchPopularMovies(pageNumber) {
    try {
      const respone = await fetch(`${popularMoviesUrl}&page=${pageNumber}`);
      if (!respone.ok) {
        throw new Error("Network Respone Was Not Okay");
      }
      const data = await respone.json();
      console.log(data);
      console.log(data.results);
      setdata(data.results);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  }

  useEffect(() => {
    fetchPopularMovies(2);
  }, []);


  return (
    <div className="App">
      <div>
        <Router>
        <Navbar/>
        <MyContext.Provider value={{text,setText}}>
          <Routes>
            <Route path="/" element={<Home data={data}/>} />
            <Route path="/moviedetails" element={<MovieDetails />} />
            <Route path="/shortlistedmovies" element={<ShortlistedMovies />} />
          </Routes>
          </MyContext.Provider>
        </Router>
      </div>
    </div>
  );
}

export default App;
