import React from 'react'
import logo from '../../src/tmdb_logo.svg'
import StyledHeader from '../styles/StyledHeader'

const Header = () => {
    return (
        <StyledHeader>
            <a href='/'>
                <h2>gMovies</h2>
            </a>
            <img src={logo} alt="" />
        </StyledHeader>
    )
}

export default Header