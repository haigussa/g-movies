import styled from 'styled-components'

const StyledCenterOfPage = styled.div`
    display:flex;
    flex-direction:column;
    min-height: 60vh;
    justify-content:center;
    align-items:center;
    color:#C2C2C2;
    h2{
    font-size:5rem;
    }
    p{
    font-size:2.5rem;
    }
    a{
        text-decoration:none;
        color:crimson;
        margin-top: 2rem;
        button{
            padding:0.5rem 2rem;
            font-size:2rem;
            width:20vw;
            border-radius: 5px;
            background-color:#e43f5a;
            color:#FFF;
        }
    }
`

export default StyledCenterOfPage;