import styled from 'styled-components'
const StyledButton = styled.button`
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
    font-size: 2rem;
    border-radius: 5px;
    display:block;
    width: 50%;
    margin: 4rem auto;
    outline:none;
    transition: all 0.3s ease-in-out;
    &:hover{
        cursor: pointer;
        background-color: black;
    }
`

export default StyledButton;