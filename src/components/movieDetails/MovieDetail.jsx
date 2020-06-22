import React from 'react'
import useFetchMovieDetail from '../../hooks/useFetchMovieDetail'
import NoBackground from '../../NoBackground.png'
import NoPhotoAvailable from '../../NoPhotoAvailable.png'
import NoProfilePicture from '../../NoProfilePicture.png'
import StyledMovieDetail from '../../styles/StyledMovieDetail'
import { StyledCastGrid } from '../../styles/StyledMovieCast'
import LoadingPage from '../LoadingPage'
import ErrorPage from '../ErrorPage'
import useFetchCredits from '../../hooks/useFetchCredits'
import MovieCast from './MovieCast'

import {
    FaThumbsUp,
    FaClock,
    FaRegCalendarCheck
} from 'react-icons/fa'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/'

const MovieDetail = props => {
    
    const { id } = props.match.params
    const [{ movieDetail, error, loading }] = useFetchMovieDetail(id)

    const [{ credits }] = useFetchCredits(id)

    const movieGenres = movieDetail.genres.length
        ? movieDetail.genres.map(genre =>
            <li key={genre.name}>
                {genre.name}
            </li>)
        : ""

    const posterImage = movieDetail.movie.poster_path
        ? `${IMG_BASE_URL}w342${movieDetail.movie.poster_path}`
        : { NoPhotoAvailable }

    const movieLanguages = movieDetail.languages.length
        ? movieDetail.languages.map(language =>
            <li key={language.name}>
                {language.name}
            </li>)
        : ""

    const movieCountries = movieDetail.countries.length
        ? movieDetail.countries.map(country =>
            <li key={country.name}>
                {country.name}
            </li>)
        : ""

    const movieCredits = credits.length
        ? credits.map(cast =>
            <MovieCast key={cast.id}
                profilePic={cast.profile_path
                    ? `${IMG_BASE_URL}w300${cast.profile_path}`
                    : `${NoProfilePicture}`}
                actorName={cast.name}
                character={cast.character} />)
        : ""
    if (!error && !loading) {

        return (
            <>

                <StyledMovieDetail bgImage={movieDetail.movie.backdrop_path
                    ? `${IMG_BASE_URL}w1280/${movieDetail.movie.backdrop_path}`
                    : NoBackground}>

                    <div className="movieSummary">
                        <span>
                            <FaThumbsUp size="2rem" className="fa" /> &nbsp; {movieDetail.movie.vote_average}
                        </span>
                        <span>
                            <FaClock size="2rem" className="fa" />
                        &nbsp; {movieDetail.movie.runtime} minutes
                        </span>
                        <span><FaRegCalendarCheck size="2rem" className="fa" /> &nbsp; {new Date(movieDetail.movie.release_date).getFullYear()} </span>
                    </div>

                    <div className="movieDescriptionWrapper">
                        <div className="title">
                            <h2>{movieDetail.movie.title}</h2>
                            <span className="tagline">
                                {movieDetail.movie.tagline}
                            </span>
                        </div>

                        <div className="movieContainer">
                            <img src={posterImage} alt={movieDetail.movie.title} />
                            <div className="overview">
                                <div className="moviePlot">
                                    <p>{movieDetail.movie.overview}</p>
                                </div>
                                <div className="movieDetails">
                                    <div className="feature" >
                                        <h3>
                                            {
                                                movieDetail.genres.length === 1
                                                    ? "Genres"
                                                    : movieDetail.genres.length > 1
                                                        ? "Genres" : ""
                                            }
                                        </h3>
                                        <ul className="featureList">
                                            {movieGenres}
                                        </ul>
                                    </div>
                                    <div className="feature">
                                        <h3>
                                            {
                                                movieDetail.languages.length === 1
                                                    ? "Language"
                                                    : movieLanguages.length > 1
                                                        ? "Languages"
                                                        : ""
                                            }
                                        </h3>
                                        <ul className="featureList">
                                            {movieLanguages}
                                        </ul>
                                    </div>
                                    <div className="feature">
                                        <h3>
                                            {
                                                movieDetail.countries.length === 1
                                                    ? "Country"
                                                    : movieDetail.countries.length > 1
                                                        ? "Countries"
                                                        : ""
                                            }
                                        </h3>
                                        <ul className="featureList">
                                            {movieCountries}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </StyledMovieDetail>

                <h3 className="sectionTitle">Actors</h3>

                <StyledCastGrid>
                    {movieCredits}
                </StyledCastGrid>
            </>
        )
    } else if (loading) {
        return <LoadingPage />
    } else if (error) {
        return <ErrorPage />
    }

}

export default MovieDetail
