import styled from 'styled-components'

const StyledMovieCard = styled.div`
display: flex;
width: 630px;
margin: 5px;
height: 100%;
border: 2px solid #999;
border-radius: 0 30px 30px 0; 
background-color: white;
background-color: #CACACA;


.imgContainer{
    height: 100%;
    box-sizing: border-box;
    img{
        display: block;
        height: 100%;
        width:154px;
        /* border: 8px solid red; */
    }
}
.movieDetail{
    border-radius: 0 30px 30px 0;
    width: 100%;
    position:relative;
    /* min-height: 10rem;
    min-height: 23.1rem; */


    .movieTitle{
        background-color:#c2c2c2;
        text-align: center;
        font-size: 1.7rem;
        border-radius: 0 30px 0px 0;
        padding: 1rem;
        /* font-family: 'Montserrat', sans-serif; */
        font-family: 'Bellota', cursive;
    }
    .movieInfo{
        background-color:#666;
        border-radius: 0 0 30px 0;
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
        padding:0 1rem;
        text-align: justify;
        width: 100%;
        display: -webkit-box;
        margin-top: 1rem;
        -webkit-line-clamp: 7; 
        -webkit-box-orient: vertical;  
        overflow:hidden;
    }
   } 

`

export default StyledMovieCard