import styled from 'styled-components'

const StyledMovieDetail = styled.div`
    min-width: 100%;
    margin-top: -1.9rem;
    text-align:center;
    position:relative;
    min-height:80%;
    background: ${props => `url(${props.bgImage}) no-repeat center center/cover`};
    .movieSummary{
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
           align-items:center;
           height: 6rem;
            .fa{
                color: #e43f5a;
                align-self:center;
            }
        }
    }
    .movieDescriptionWrapper{
        color:white;
        background-color:rgba(0,0,0,.3);
        width: 100%;
        height:100%;
        margin: auto;
        display:flex;
        flex-direction:column;
        h2{
            font-size:4rem;
            padding-top: 2rem;
            margin-bottom:1rem;
        }
        .tagline{
            font-size: 2rem;
            font-style:italic;
            display:block;
            margin-bottom:2rem;
        }
        .movieContainer{
            display:flex;
            background-color:rgba(0,0,0,.6);
            border: 1px solid #c2c2c2;
            border-bottom: none;
            border-radius:10px 10px 0 0 ;
            width: 80%;
            height:60%;;
            position:absolute;
            bottom:6rem;
            left:50%;
            transform:translateX(-50%);
            @media (max-width: 978px) {
                    flex-direction: column;
                }
            img{
                align-self:center;
                border-radius: 10px 0 0 0;
                background-color:transparent;
                height:100%;
                @media (max-width: 978px) {
                    display:none;
                }
            }
            
        }
    }
        
`

export default StyledMovieDetail