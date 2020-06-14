import styled from 'styled-components'
const StyledButton = styled.button`
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
    font-size: 2rem;
    border-radius: 5px;
    display:block;
    margin: 4rem auto;
    transition: all 0.3s ease-in-out;
    &:hover{
        cursor: pointer;
        background-color: black;
    }
`

export default StyledButton;