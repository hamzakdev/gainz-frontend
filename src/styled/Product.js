import styled from 'styled-components'

export const Container = styled.div`
width: 12rem;
height: 25rem;
padding: 10px;
display: flex;
border: 2px solid black;
flex-direction: column;
transition: 0.3s ease all;
:hover{
    border: 2px solid white;

}

`
export const Image = styled.img`
width: 100%;
height: 70%;
object-fit: cover;
`
export const Name = styled.p`
color: white;
/* text-align: center; */
width: 100%;
font-size: 1.2rem;
margin-bottom: 1rem;
margin-top: 1rem;
font-weight: 200;
`
export const Price = styled.span`
color: white;
font-size: 1.5rem;
white-space: nowrap;
font-weight: 500;
`