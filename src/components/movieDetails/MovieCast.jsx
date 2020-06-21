import React from 'react'
import StyledMovieCast from '../../styles/StyledMovieCast'

const MovieCast = (props) => {
    return (
        <StyledMovieCast>
            <img src={props.profilePic} alt={props.name}/>
            <h4>{props.actorName}</h4>
            <p>As {props.character}</p>
        </StyledMovieCast>
    )
}

export default MovieCast
