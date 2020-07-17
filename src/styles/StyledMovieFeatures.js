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
        ul{
            max-height: 80%;
            overflow-y:auto;
            &::-webkit-scrollbar {
                width: 10px;
            }
            &::-webkit-scrollbar-track {
                background:#666; 
                border-radius: 5px;
            } 
            &::-webkit-scrollbar-thumb {
                background-color: black;
                border-radius: 20px;
                border: 1px solid #c2c2c2;
            }
        }
        .featureList li{
            list-style:none;
            font-size: 1.7rem;
            padding: .5rem;
           
        }
    }

`

export default StyledMovovieFeatures