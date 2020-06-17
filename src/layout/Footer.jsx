import React from 'react'
import StyledFooter from '../styles/StyledHeaderAndFooter'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <StyledFooter>
            <p >Created By Gussa Haile </p>
            <div className="socialWrapper">
                <a className="social" href="https://www.facebook.com/haigussa" target="_blank" rel="noopener noreferrer" ><FaFacebookSquare size="3rem" /></a>
                <a className="social" href="https://www.instagram.com/haigussa" target="_blank" rel="noopener noreferrer"><FaInstagramSquare size="3rem" /></a>
                <a className="social" href="https://www.linkedin.com/in/haigussa" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="3rem" /></a>
                <a className="social" href="https://www.github.com/haigussa" target="_blank" rel="noopener noreferrer"><FaGithubSquare size="3rem" /></a>
            </div>
        </StyledFooter>
    )
}

export default Footer