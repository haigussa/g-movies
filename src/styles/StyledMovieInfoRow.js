import styled from 'styled-components'

const StyledMovieInfoRow = styled.div`
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
`
export default StyledMovieInfoRow;