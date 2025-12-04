import React from 'react';
import "./Movie.css"
import { useState } from 'react';

const  Movie = ({movie,movieCountHandler}) => {

    const [movieWatch, setMovieWatch] = useState(false)

    const movieHandler =()=>{

        setMovieWatch(true);

        setMovieWatch(!movieWatch)
        movieCountHandler(movie);
        
    }
    // console.log(movie)
    return (
        <div className={`movie-card ${movieWatch && "bg"}`}>

            <img src={movie.posterURL} alt="" />
            <h3>Movie: {movie.title}</h3>

            <button onClick={movieHandler}> {movieWatch?"Favoutie":"Watch"}</button>
            
        </div>
    );
};

export default  Movie;