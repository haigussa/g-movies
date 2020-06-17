import styled from 'styled-components'

const StyledMovieCard = styled.div`
display: flex;
width: 630px;
margin: 2rem auto;
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
        &:hover{
            cursor: pointer;
            border: 1px solid #e43f5a
        }
    }
}
.movieDetail{
    border-radius: 0 30px 30px 0;
    width: 100%;
    position:relative;
    .movieTitle{
        background-color:#c2c2c2;
        text-align: center;
        font-size: 1.7rem;
        border-radius: 0 30px 0px 0;
        padding: 1rem;
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
        .cta {
            background-color: #e43f5a;
            padding: 0.4rem;
            border-radius: 4px;
            border:none;
            color:white;
            font-size: 1.3rem;
            transition: 0.3s all ease-in-out;
            &:hover{
                cursor:pointer;
                background-color:white;
                color: #e43f5a;
            }
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