import styled from 'styled-components'

const StyledMovieOverview = styled.div`
h2{
    color: #FFF;
    font-size:3rem;
    text-align:center;
    margin: 3rem auto 1rem;
}
    .moviePlot{
        margin: 1rem;
        p{
            font-size:1.7rem;
            text-align:justify;
            line-height:1.3;
            padding: 1rem 0.5rem;
            color: #C2C2C2;
        }
    }
    .moreInfo{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        h4{
            font-size: 2.5rem;
            color:#c2c2c2;
            padding:0.5rem 2rem;
        }
        ul li{
            list-style:none;
            font-size:2rem;
            color: #FFF;
            padding: 0.5rem 3rem
        }
    }
`

export default StyledMovieOverview;