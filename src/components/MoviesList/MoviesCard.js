import React from "react";
import  './moviescard.module.css'
import { useNavigate } from "react-router-dom";
const MoviesCard=({title,release_date,backdrop_path,poster_path})=>{
    const navigate=useNavigate();
    return(
        <>
        <div className="cards"style={{    margin: "20px 0px",
    boxShadow:" rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "1.5rem",
    borderRadius: "5px",}}>
        <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`} alt="" />
            <h2>{title.slice(0,10)}...</h2>
            {/* <h3>{backdrop_path}</h3> */}
            <h4>{release_date}</h4>
        </div>
        </>
    )
};
    export default  MoviesCard;