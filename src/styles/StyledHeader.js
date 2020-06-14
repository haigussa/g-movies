import styled from 'styled-components'

const StyledHeader= styled.nav`
height: 8rem;
display:flex;
justify-content: space-between;
margin:0 auto 2rem;
background-color:#222;
background-color:#666;
padding: 1rem;
a{
    text-decoration:none;
    align-self:center;
    margin-left:3rem;
}
h2{
    font-size: 3rem;
    color:#fff;
    font-family: 'Bellota', cursive;
    padding:0;
    letter-spacing: .5rem;
}
img{
    height: 6rem;
    margin-right: 3rem;
}

`
export default StyledHeader