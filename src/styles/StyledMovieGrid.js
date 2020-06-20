import styled from 'styled-components'

const StyledMovieGrid = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 1rem auto;
`

export const StyledTitle = styled.h2`
    font-size: 3rem;
    text-align: center;
    margin:4rem auto 6rem;
    color:#FFF;
`

export const StyledHeroTitle = styled.h3`
    font-size: 3rem;
    font-family: 'Bellota', cursive;
    color:white;
    background-color:rgba(0,0,0,0.5);
    padding: 1rem 2rem;
    border: 2px solid white;
    border-radius: 10px;
    position:absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%)
`
export default StyledMovieGrid