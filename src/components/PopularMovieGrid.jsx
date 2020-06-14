import React, { useState } from 'react'
import MovieCard from './MovieCard'
import useFetchData from '../hooks/useFetchData'
import StyledMovieGrid, { StyledTitle } from '../styles/StyledMovieGrid'
import StyledButton from '../styles/StyledButton'
import StyledForm from '../styles/StyledForm'
import NoImage from '../NoImage.jpg'
const BASE_URL = 'https://api.themoviedb.org/3/'
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/'

const PopularMovieGrid = () => {
    const [searchMovies, setSearchMovies] = useState(false)
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchText, setSearchText] = useState('')

    const endPoint = searchMovies ? `${BASE_URL}search/movie?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US&query=${searchTerm}&page=${page}&include_adult=false` : `${BASE_URL}movie/popular?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US&page=${page}`
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
            imgSrc={movie.poster_path ?
                `${IMG_BASE_URL}w154/${movie.poster_path}`
                : `${NoImage}`}
        />
    })
    console.log(state)
    return (
        <>

            <StyledForm
                onSubmit={handleSubmitSearch}
                bgImage={`${IMG_BASE_URL}w1280/${state.backgroundImage}`}
            >
                <input
                    type="text"
                    name="searchTerm"
                    placeholder="Search for a movie..."
                    onChange={handleChange}
                    value={searchText}
                />
                {/* <input type="submit" value="Search" /> */}
            </StyledForm>
            {searchMovies ?
                <StyledTitle>Search Result</StyledTitle>
                : <StyledTitle>Popular Movies</StyledTitle>}
            <StyledMovieGrid>
                {movieList}
            </StyledMovieGrid>
            <StyledButton
                onClick={() => handlePageChange(page)}
            >
                Load More
            </StyledButton>
        </>
    )
}

export default PopularMovieGrid
