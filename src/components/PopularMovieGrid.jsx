import React, { useState } from 'react'
import MovieCard from './MovieCard'
import useFetchData from '../hooks/useFetchData'
import StyledMovieGrid from '../styles/StyledMovieGrid'
import StyledButton from '../styles/StyledButton'
import StyledForm from '../styles/StyledForm'

const BASE_URL = 'https://api.themoviedb.org/3/'

const PopularMovieGrid = () => {
    const [searchMovies, setSearchMovies] = useState(false)
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchText, setSearchText] = useState('')

    const endPoint = searchMovies ? `${BASE_URL}search/movie?api_key=716b3f0b5027135ac51ac9d6da4b4698&language=en-US&query=${searchTerm}&page=${page}&include_adult=false` : `${BASE_URL}movie/popular?api_key=716b3f0b5027135ac51ac9d6da4b4698&language=en-US&page=${page}`
    const [{ state, error, loading }, fetchMovies] = useFetchData(endPoint)

    const handlePageChange = prevPage => {
        setPage(prevPage += 1)
        console.log(prevPage)
        window.scrollTo(0, 0)
    }

    const handleChange = e => {
        setSearchText(e.target.value)
    }
    const handleSubmitSearch = e => {
        e.preventDefault()
        setSearchTerm(searchText)
        setSearchText("")
        setSearchMovies(true)
    }

    const movieList = state.movies.map(movie => {
        return <MovieCard
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
            plot={movie.overview}
            imgSrc={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
        />
    })
    return (
        <>
            <StyledForm onSubmit={handleSubmitSearch} >
                <input type="text" name="searchTerm" placeholder="Search for a movie" onChange={handleChange} value={searchText} />
                {/* <input type="submit" value="Search" /> */}
            </StyledForm>
            <h2>Popular Movies</h2>
            <StyledMovieGrid>
                {movieList}
            </StyledMovieGrid>
            <StyledButton onClick={() => handlePageChange(page)}>Load More</StyledButton>
        </>
    )
}

export default PopularMovieGrid
