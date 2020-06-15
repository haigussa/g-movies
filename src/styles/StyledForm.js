import styled from 'styled-components'

const StyledForm = styled.form`
        min-width: 100%;
        height: 500px;
        margin-top: -1.9rem;
        text-align:center;
        position:relative;
        background: ${props => `url(${props.bgImage})`};
        background-size: 100% cover;
        background-repeat: no-repeat;
        background-position: center     center;
        input{
            width: 50%;
            padding: 1rem 0.5rem;
            font-size: 1.8rem;
            outline: none; 
            background-color: rgba(0,0,0,.5);
            color: white;
            border: 2px solid white;
            position: absolute;
            bottom:10%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 6px;
            max-width: 780px;
            &::placeholder{
                color: white;
                font-size: 1.8rem;
                opacity: 1;
                text-align:center;
            }
}

`
export default StyledForm