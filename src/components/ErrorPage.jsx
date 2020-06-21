import React from 'react'
import StyledCenterOfPage from '../styles/StyledCenterOfPage'

const ErrorPage = () => {
    return (
        <StyledCenterOfPage>
            <h2>Sorry, something went wrong!</h2>
            <p>Please wait a little, and try again.</p>
            <a href="/">Home</a>
        </StyledCenterOfPage>
    )
}

export default ErrorPage
