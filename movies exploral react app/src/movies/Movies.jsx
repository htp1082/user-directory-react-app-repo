import React, { useState } from 'react';
import { use } from 'react';
import "./Movies.css"
import Movie from '../movie/ Movie';

const Movies = ({moviesFech}) => {
    const movies = use(moviesFech);
    // console.log(movies)

    const [movieCount, setMovieCound] = useState([])
    const movieCountHandler =(movieList)=>{
        const newMovieCountHandler =[...movieCount,movieList]
        setMovieCound(newMovieCountHandler);
    }
    return (
        <div>
            <h2>Total Movies: {movies.length}</h2>
            <h2>Watch the Movies: {movieCount.length}</h2>
            <ol>
                {movieCount.map( movieList =><li>{movieList.title}</li>)}
            </ol>
            <div className={`movie-grid`}>
                {
                    movies.map(movie => <Movie key ={movie.id} movieCountHandler={movieCountHandler} movie={movie}></Movie>)
                }
            </div>
        </div>
    );
};

export default Movies;