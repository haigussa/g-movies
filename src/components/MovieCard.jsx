import React from 'react'
import StyledMovieCard from '../styles/StyledMovieCard'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    return (

        <StyledMovieCard>
            <div className="imgContainer">
                <Link to="#">
                <img src={props.imgSrc} alt={props.title} />
                    </Link>
            </div>
            <div className="movieDetail">
                <h2 className="movieTitle">{props.title}</h2>
                <div className="moviePlot">
                    {props.plot}
                </div>
                <div className="movieInfo">
                    <p className="movieDets">
                        <span>Year &nbsp;</span>
                        <span>
                            {new Date().getFullYear(props.releaseDate)}
                        </span>
                    </p>
                    <p className="movieDets">
                        <span > Rating </span>
                        <span className="rating">
                            {props.rating}
                        </span>
                    </p>
                </div>
            </div>
        </StyledMovieCard>
    )
}

export default MovieCard
