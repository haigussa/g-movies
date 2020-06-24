import React from 'react'
import StyledMovovieFeatures from '../../styles/StyledMovieFeatures'

const MovieFeatures = ({ genres, languages, countries}) => {

    return (

        <StyledMovovieFeatures className="movieDetails">
            <div className="feature" >
                <h3>
                    {
                        genres.length === 1
                            ? "Genres"
                            : genres.length > 1
                                ? "Genres" : ""
                    }
                </h3>
                <ul className="featureList">
                    {genres}
                </ul>
            </div>
            <div className="feature">
                <h3>
                    {
                        languages.length === 1
                            ? "Language"
                            : languages.length > 1
                                ? "Languages"
                                : ""
                    }
                </h3>
                <ul className="featureList">
                    {languages}
                </ul>
            </div>
            <div className="feature">
                <h3>
                    {
                        countries.length === 1
                            ? "Country"
                            : countries.length > 1
                                ? "Countries"
                                : ""
                    }
                </h3>
                <ul className="featureList">
                    {countries}
                </ul>
            </div>

            
        </StyledMovovieFeatures>
    )
}

export default MovieFeatures
