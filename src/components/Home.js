import React from 'react'
import MoviesList from './MoviesList/MoviesList';
import MoviesCard from './MoviesList/MoviesCard';

export default function Home({data}) {
  return (
    <div className='home'>
      {/* <h1>Movies list</h1> 
      <p>Welcome to our Website</p>  */}
      {
        data&&data.map(({title,release_date,poster_path},index)=>{
          return(
            <div key={index}>
              <MoviesCard title={title} release_date={release_date} poster_path={poster_path}/>
            </div>
          );
        })
      }
        </div>
  );
}
