import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../imgbin_movie-projector-film-movie-camera-png.png';
export default function navbar({Home,MoviesDetails,ShortlistedMovies}) {
  return (
    <div className="navbar">
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='navigate'>
            <Link to="/">Home</Link>
            <Link to="/moviedetails">Movie Details</Link>
            <Link to="/shortlistedmovies">ShortlistedMovies</Link>
      </div>
    </div>
  )
}

