import React from 'react'
import StyledMovieCard from '../styles/StyledMovieCard'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    return (
        <StyledMovieCard>
            <div className="imgContainer">
                <Link to={"/movie/" + props.id}>
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
                        <span>Rating &nbsp;</span>
                        <span className="rating">
                            {props.rating}/10
                        </span>
                    </p>
                    <Link to={"/movie/" + props.id}>
                        <button className="cta"> More </button>
                    </Link>
                </div>
            </div>
        </StyledMovieCard>
    )
}

export default MovieCard
