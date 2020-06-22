import React from 'react'
import StyledMovovieFeatures from '../../styles/StyledMovieFeatures'

const MovieFeatures = ({ genres, languages, countries}) => {

    const movieGenres = genres.length
        ? genres.map(genre =>
            <li key={genre.name}>
                {genre.name}
            </li>)
        : ""

    const movieLanguages = languages.length
        ? languages.map(language =>
            <li key={language.name}>
                {language.name}
            </li>)
        : ""

    const movieCountries = countries.length
        ? countries.map(country =>
            <li key={country.name}>
                {country.name}
            </li>)
        : ""

   
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
                    {movieGenres}
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
                    {movieLanguages}
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
                    {movieCountries}
                </ul>
            </div>

            
        </StyledMovovieFeatures>
    )
}

export default MovieFeatures
