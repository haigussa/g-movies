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
    min-height: 100%;
    box-sizing: border-box;
    img{
        display: block;
        min-height: 100%;
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
        align-items:center;
        margin-top: 2rem;
        position:absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        margin-top:1rem;
        & p span{
            font-size: 1.5rem;
        }
        .cta {
            padding: 0.4rem 1rem;
            border-radius: 4px;
            color:white;
            background-color:#999;
            font-size: 1.3rem;
            transition: 0.3s all ease-in-out;
            &:hover{
                cursor:pointer;
                background-color:#c2c2c2;
                color:#222;
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
        -webkit-line-clamp: 6; 
        -webkit-box-orient: vertical;  
        overflow:hidden;
    }
   } 

`
export default StyledMovieCard