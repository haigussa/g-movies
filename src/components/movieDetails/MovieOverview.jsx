import React from 'react'
import StyledMovieOverview from '../../styles/StyledMovieOverview'

const MovieOverview = ({ overview, directors, revenue }) => {

    const movieDirectors = directors.length
        ? directors.map(director =>
            <li key={director.name}>
                {director.name}
            </li>)
        : ""

    return (
        <StyledMovieOverview >
            <h2>Plot</h2>
            <div className="moviePlot">
                <p>{overview}</p>
            </div>
            <div className="moreInfo">
                <div className="director">
                    <h4>Director</h4>
                    <ul>
                        {movieDirectors}
                    </ul>
                </div>
                <div className="director">
                    <h4>Revenue</h4>
                    <ul>
                        <li>
                            {
                               revenue? `$${revenue.toLocaleString()}`:"N/A"
                           
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </StyledMovieOverview>
    )
}

export default MovieOverview
