import styled from 'styled-components'

const StyledMovovieFeatures = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    @media (max-width: 768px) {
    flex-wrap:wrap;
    } 
    .feature{
        margin: 1rem;
        h3{
            font-size:2.5rem;
            margin: 0 2rem 1rem;
        }
        .featureList li{
            list-style:none;
            font-size: 1.7rem;
            padding: .5rem;
            /* text-align:left; */
        }
    }

`

export default StyledMovovieFeatures