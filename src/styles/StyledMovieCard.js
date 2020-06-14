import styled from 'styled-components'

const StyledMovieCard = styled.div`
display: flex;
width: 550px;
margin: 5px;
border: 1px solid #999;
border-radius: 0 10px 10px 0;
.imgContainer{
    height: 100%;
    align-self: center;
    img{
        height: 100%;
        width:154px;
    }
}
.movieDetail{
    border-radius: 0 10px 10px 0;
    width: 100%;
    position:relative;

    .movieTitle{
        background-color:#c2c2c2;
        text-align: center;
        font-size: 1.7rem;
        padding: 1rem;
        font-family: 'Montserrat', sans-serif;
    }
    .movieInfo{
        background-color:#666;
        color:white;
        padding: 1rem;
        display:flex;
        justify-content: space-evenly;
        margin-top: 2rem;
        position:absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        & p span{
            font-size: 1.5rem;
        }
    }
    .moviePlot{
        font-size: 1.5rem;
        /* padding:1rem; */
        text-align: justify;
        width: 100%;
        display: -webkit-box;
        margin-top: 1rem;

        -webkit-line-clamp: 5; 
        -webkit-box-orient: vertical;  
        overflow:hidden;
    }
   } 

`

export default StyledMovieCard