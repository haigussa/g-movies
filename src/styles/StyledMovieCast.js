import styled from 'styled-components'

const StyledMovieCast = styled.div`
    border: 1px solid #222;
    margin: 1rem;
    border-radius: 10px 10px 0 0;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:302px;

    img{
        border-radius: 10px 10px 0 0;
        border-bottom: 1px solid #ccc;
    }
    h4{
        color:#222;
        font-size: 2rem;
        padding: 2rem .5rem;
    }
    p{
        font-size: 1.5rem;
        margin-bottom: .5rem;
    }
`
export const StyledCastGrid = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    background-color:#C2C2C2;

`
export default StyledMovieCast;