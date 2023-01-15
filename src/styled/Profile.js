import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Pfp = styled.img`
height: 15vmax;
width: 15vmax;
object-fit: cover;
border-radius: 20%;
border: 2px solid white;
`
export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`
export const Name = styled.span`
font-size: 2vmax;
font-weight: 200;

`