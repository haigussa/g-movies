import React from 'react'
import logo from '../../src/tmdb_logo.svg'
import StyledHeader from '../styles/StyledHeader'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <StyledHeader>
            <Link to='/'>
                <h2>gMovies</h2>
            </Link>
            <img src={logo} alt="" />
        </StyledHeader>
    )
}

export default Header