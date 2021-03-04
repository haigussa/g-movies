import React, { useEffect } from 'react'
import useFetchMovieDetail from '../../hooks/useFetchMovieDetail'
import NoBackground from '../../NoBackground.png'
import NoProfilePicture from '../../NoProfilePicture.png'
import StyledMovieDetail from '../../styles/StyledMovieDetail'
import { StyledCastGrid } from '../../styles/StyledMovieCast'
import LoadingPage from '../LoadingPage'
import ErrorPage from '../ErrorPage'
import useFetchCredits from '../../hooks/useFetchCredits'
import MovieCast from './MovieCast'
import MovieOverview from './MovieOverview'
import MovieFeatures from './MovieFeatures'
import MovieInfoRow from './MovieInfoRow'
import { FaRegArrowAltCircleUp } from 'react-icons/fa'
import { useState } from 'react'
import {IMG_BASE_URL} from '../../config'


const MovieDetail = props => {

    const showTopButton = {
        width: "50px",
        height: "50px",
        backgroundColor: "rgba(228, 63, 90, .7)",
        color: "white",
        borderRadius: "50%",
        border: "none",
        outline: "none",
        position: "fixed",
        bottom: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        cursor: "pointer"
    }

    const hideTopButton = {
        display: "hidden"
    }

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const handleScrollToTop = () => {
        const scrolledDown = window.scrollY > 300;
        scrolledDown ? setScrolled(true) : setScrolled(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollToTop)
        return () => window.removeEventListener("scroll", handleScrollToTop)
    }, [])

    const { id } = props.match.params
    const [{ movieDetail, error, loading }] = useFetchMovieDetail(id)
    const [{ casts, crews }] = useFetchCredits(id)

    const movieGenres = movieDetail.genres.length
        ? movieDetail.genres.map(genre =>
            <li key={genre.name}>
                {genre.name}
            </li>)
        : ""

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

    const movieCredits = casts.length
        ? casts.map(cast =>
            <MovieCast key={cast.id}
                profilePic={cast.profile_path
                    ? `${IMG_BASE_URL}w300${cast.profile_path}`
                    : `${NoProfilePicture}`}
                actorName={cast.name}
                character={cast.character} />)
        : ""

    const movieDirectors = crews.length ? crews.filter(crew => {
        if (crew.job === 'Director') {
            return crew.name
        } else {
            return null
        }
    }) : []

    const scrollToTop = () => {
        window.scroll(0, 0)
    }

    if (!error && !loading) {
        return (
            <>
                <StyledMovieDetail
                    bgImage={movieDetail.movie.backdrop_path
                        ? `${IMG_BASE_URL}w1280/${movieDetail.movie.backdrop_path}`
                        : NoBackground}
                >

                    <MovieInfoRow
                        rating={movieDetail.movie.vote_average > 0 ? movieDetail.movie.vote_average: "N/A"}
                        runtime={movieDetail.movie.runtime}
                        releaseDate={new Date(movieDetail.movie.release_date)}
                    />

                    <div className="movieDescriptionWrapper">

                        <div className="title">
                            <h2>{movieDetail.movie.title}</h2>
                            <span className="tagline">
                                {movieDetail.movie.tagline}
                            </span>
                        </div>

                        <div className="movieContainer" >
                            <MovieFeatures
                                genres={movieGenres}
                                languages={movieLanguages}
                                countries={movieCountries}
                            />
                        </div>
                    </div>

                </StyledMovieDetail>

                <MovieOverview
                    overview={movieDetail.movie.overview}
                    directors={movieDirectors}
                    revenue={movieDetail.movie.revenue}
                />

                <h3 className="sectionTitle">Actors</h3>

                <StyledCastGrid>
                    {movieCredits}
                </StyledCastGrid>

                <button
                    onClick={scrollToTop}
                    style={scrolled
                        ? showTopButton
                        : hideTopButton}>
                    <FaRegArrowAltCircleUp
                        size="3rem" />
                </button>

            </>
        )
    } else if (loading) {
        return <LoadingPage />
    } else if (error) {
        return <ErrorPage />
    }
}

export default MovieDetail
