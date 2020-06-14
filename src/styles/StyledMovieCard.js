import styled from 'styled-components'

const StyledMovieCard = styled.div`
display: flex;
width: 650px;
margin: 5px;
border: 1px solid #999;
border-radius: 0 10px 10px 0;
.imgContainer{
    height: 100%;
    align-self: center;
    img{
        height: 100%;
        width:100%;
    }
}
.movieDetail{
    border-radius: 0 10px 10px 0;
    width: 100%;
    /* background-color:#c2c2c2; */
    .movieTitle{
        text-align: center;
        font-size: 1.7rem;
        color:red;
        padding: 1rem;
        font-family: 'Montserrat', sans-serif;
    }
    .movieInfo{
        display:flex;
        justify-content: space-evenly;
        & p span{
            font-size: 1.5rem;
        }
    }
    .moviePlot{
        /* font-family: 'Bellota', cursive; */
        font-family: 'Montserrat', sans-serif;
        font-size: 1.5rem;
        padding: 1rem;
        /* line-height: 1.7rem; */
        text-align: justify;
        width: 100%;
        display: -webkit-box;

        /* -webkit-line-clamp: 3; */
        /* -webkit-box-orient: vertical;  
        overflow:hidden;
        height: 14.7rem; */
    }
   } 
}

/* width:159px;
min-height: 280px;
text-align: center;
background-color: peachpuff;
margin: 1rem;
justify-content:center;
align-items: center;
img{
    margin: auto;
    display: flex;
}
.movieInfo{
    justify-content: space-between;
    margin-top: .5rem;
    padding: .5rem;
    background-color:crimson;
    .rating{
    
    }
    .movieDets{
        border-bottom: 1px dashed #999;
        display:flex;
        justify-content: space-between;
        padding: 0.4rem;
    }
} */
`

export default StyledMovieCard