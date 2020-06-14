import styled from 'styled-components'

const StyledForm = styled.form`
        min-width: 100vw;
        height: 500px;
        margin-top: -1rem;
        text-align:center;
        position:relative;
        background: ${props=> `url(${props.bgImage})`};
        background-size: 100% cover;
        background-repeat: no-repeat;
        background-position: center center;
        
    input{
    padding: 1rem 0.5rem;
    font-size: 1.8rem;
    border-radius: 6px;
    width: 80%;
    max-width: 780px;
    outline: none; 
    background-color: rgba(0,0,0,.3);
    color: white;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ::placeholder{
        color: white;
        font-size: 1.8rem;
        opacity: 1;
    }
}
/* input[type="text"]{
    } */
`
export default StyledForm