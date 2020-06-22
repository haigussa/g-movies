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
import MovieOverview from './MovieOverview'
import MovieFeatures from './MovieFeatures'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/'

const MovieDetail = props => {

    const { id } = props.match.params
    const [{ movieDetail, error, loading }] = useFetchMovieDetail(id)

    const [{ casts, crews }] = useFetchCredits(id)


    const posterImage = movieDetail.movie.poster_path
        ? `${IMG_BASE_URL}w342${movieDetail.movie.poster_path}`
        : { NoPhotoAvailable }

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
            if(crew.job==='Director'){
                // return Array.from(`<li>${crew.name}</li>`)
                return crew.name
            }else{
                return null
            }
        }):[]

        console.log(movieDetail)

        // const directorsList = movieDirectors.length?



    


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
                            <MovieFeatures genres={movieDetail.genres} languages={movieDetail.languages} countries={movieDetail.countries}/>
                        </div>

                    </div>

                </StyledMovieDetail>

                <MovieOverview overview={movieDetail.movie.overview}  directors={movieDirectors} revenue={movieDetail.movie.revenue}/>

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
