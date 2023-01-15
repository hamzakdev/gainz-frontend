import styled from 'styled-components'
export const Left = styled.div`
display: flex;
gap: 20px;  
`

export const ImageOptions = styled.div`
flex: 1;
`
export const ImageOption = styled.img`
width: 130px;
aspect-ratio: 1;
object-fit: cover;
cursor: pointer;
margin-bottom: 1rem;
@media(max-width:850px){width:50px; height:50px;}
transition: 0.3s ease all;

:hover{
    filter: opacity(0.7);
}

`   
export const ImageContainer = styled.div`
flex: 5;
`
export const Image = styled.img`
width: 450px;
height: 500px;
object-fit: contain;
@media(max-width:1140px){width:400px; height:450px;}
@media(max-width:1000px){width:350px; height:400px;}
@media(max-width:850px){width:250px; height:300px;}
transition: 0.1s ease all;



`