import React from 'react'
import { FaThumbsUp, FaClock, FaRegCalendarCheck } from 'react-icons/fa'
import StyledMovieInfoRow from '../../styles/StyledMovieInfoRow'

const MovieInfoRow = ({ rating, releaseDate, runtime }) => {
    return (
        <StyledMovieInfoRow>
            <span>
                <FaThumbsUp
                    size="2rem"
                    className="fa"
                />
                &nbsp; {rating}
            </span>
            <span>
                <FaClock
                    size="2rem"
                    className="fa"
                />
                &nbsp; {runtime} minutes
             </span>
            <span>
                <FaRegCalendarCheck
                    size="2rem"
                    className="fa"
                />
                &nbsp; {new Date(releaseDate).getFullYear()}
            </span>
        </StyledMovieInfoRow>
    )
}

export default MovieInfoRow
