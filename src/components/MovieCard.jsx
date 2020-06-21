import React from 'react'
import StyledMovieCard from '../styles/StyledMovieCard'
import { Link } from 'react-router-dom'

const MovieCard = ({id, imgSrc, title, plot, releaseDate, rating}) => {
    return (
        <StyledMovieCard>
            <div className="imgContainer">
                <Link to={"/movie/" + id}>
                    <img src={imgSrc} alt={title} />
                </Link>
            </div>
            <div className="movieDetail">
                <h2 className="movieTitle">{title}</h2>
                <div className="moviePlot">
                    {plot}
                </div>
                <div className="movieInfo">
                    <p className="movieDets">
                        <span>Year &nbsp;</span>
                        <span>
                            {new Date(releaseDate).getFullYear()}
                        </span>
                    </p>
                    <p className="movieDets">
                        <span>Rating &nbsp;</span>
                        <span className="rating">
                            {rating}/10
                        </span>
                    </p>
                    <Link to={"/movie/" + id}>
                        <button className="cta"> More </button>
                    </Link>
                </div>
            </div>
        </StyledMovieCard>
    )
}

export default MovieCard
