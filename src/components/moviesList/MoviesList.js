import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies,nameSearch,rateSearch}) => {
    return (
        <div className="movies">
            { movies.filter(choice => choice.title.toLowerCase().includes(nameSearch.toLowerCase())||choice.rate>=rateSearch).map((movie) => <MovieCard movie={movie} key={movie.id} /> )}
        </div>
    )
}

export default MoviesList
