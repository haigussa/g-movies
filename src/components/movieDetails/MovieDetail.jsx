import React from 'react'
import useFetchMovieDetail from '../../hooks/useFetchMovieDetail'
import NoBackground from '../../NoBackground.png'
import StyledMovieDetail, { StyledMovieDescription } from '../../styles/StyledMovieDetail'
import { FaThumbsUp, FaClock, FaRegCalendarCheck } from 'react-icons/fa'
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/'

const MovieDetail = props => {
    const [{ movie, error, loading }, fetchMovieDetail] = useFetchMovieDetail(props.match.params.id)

    return (
        <>
            <StyledMovieDetail bgImage={movie.backdrop_path
                ? `${IMG_BASE_URL}w1280/${movie.backdrop_path}`
                : NoBackground}>

                <div className="movieSummary">
                    <span>
                        <FaThumbsUp size="2rem" className="fa" /> &nbsp; {movie.vote_average}
                    </span>
                    <span><FaClock size="2rem" className="fa" /> &nbsp; {movie.runtime} minutes</span>
                    <span><FaRegCalendarCheck size="2rem" className="fa" /> &nbsp; {new Date().getFullYear(movie.release_date)} </span>
                </div>
            </StyledMovieDetail>

            <StyledMovieDescription >
                <h2>{movie.title}</h2>
                <span className="tagline">{movie.tagline}</span>
                <h3 className="plot"> Plot</h3>
                <p className="plotOverview">
                    {movie.overview}
                </p>
                <p>Genres</p>
                <p>Original Language</p>
                <p>Original Title</p>
            </StyledMovieDescription>
        </>
    )
}

export default MovieDetail
