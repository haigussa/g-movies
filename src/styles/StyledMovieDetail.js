import styled from 'styled-components'

const StyledMovieDetail = styled.div`
    min-width: 100%;
    height: 500px;
    margin-top: -1.9rem;
    text-align:center;
    position:relative;
    background: ${props => `url(${props.bgImage})`};
    background-size: 100% cover;
    background-repeat: no-repeat;
    background-position: center center;
    .movieSummary{
        height: 6rem;
        color: white;
        font-size: 1.3rem;
        display: flex;
        justify-content: space-around;
        align-items:center;
        background-color: rgba(0,0,0,.7);
        position:absolute;
        bottom:0;
        width: 100%;
        span{
            font-size:2rem;
            display:flex;
           justify-content:center;
            .fa{
                color: #e43f5a;
                align-self:center;
            }
        }
    }
`
export const StyledMovieDescription = styled.div`
    width: 80%;
    margin: auto;
    padding: 1rem 2rem;
    border-radius: 10px;
    text-align: center;
    h2{
        font-size: 3rem;
    }
    .tagline{
        font-size: 1.5rem;
        display: block;
        margin-bottom: 2rem;
        font-style: italic;
    }
    .plot{
        font-size: 1.5rem;
    }
    .plotOverview{
        text-align: justify;
        font-size: 1.3rem;
    }

`

export default StyledMovieDetail