import styled from 'styled-components'

const StyledHeaderAndFooter= styled.nav`
height: 8rem;
display:flex;
justify-content: space-between;
margin:0 auto 2rem;
background-color:#666;
padding: 1rem;
border-bottom: 2px solid black;
a{
    text-decoration:none;
    align-self:center;
    margin-left:3rem;
    font-size:1.3rem;
    color:white;
    padding: .8rem 1rem;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    &:hover{
        cursor:pointer;
        color:#333;
        background-color:white;
    }
}
h2{
    font-size: 3rem;
    font-family: 'Bellota', cursive;
    padding:0;
    letter-spacing: .5rem;
}
img{
    height: 6rem;
    margin-right: 3rem;
}
p{
    font-size: 1.3rem;
    color:white;
    align-self:center;
    margin-left: 3rem;
}
.socialWrapper{
    align-self:center;
    display:flex;
    margin-right: 3rem;
}

`
export default StyledHeaderAndFooter