import React from 'react'
import StyledCenterOfPage from '../styles/StyledCenterOfPage'

const NotFound = () => {
    return (
        <StyledCenterOfPage>
            <h2>Movie Not Found </h2>
            <p>Trying a different search term</p>
            <a href="/"><button>Home</button></a>
        </StyledCenterOfPage>
    )
}

export default NotFound
