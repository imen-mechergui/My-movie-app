import React from 'react'
import MovieData from './MoviesData'
function Details ({match}) {
    console.log(match)
    const movie=MovieData.find(el=>el.id=match.params.movieId)
    console.log(movie)
    return (
        <div>
            
            <p> {movie.trailer} </p> 
            <p> {movie.description}</p>

           
        </div>
    )
}

export default Details 
