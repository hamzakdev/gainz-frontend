import styled from "styled-components";

export const Container = styled.div`
width: 90%;
min-height: 600px;
margin: 60px auto;
display: flex;
color: white;
`

export const LeftContainer = styled.div`
flex: 3;
display: flex;
flex-direction: column;
`
export const Left = styled.div`
`
export const Image = styled.img`
height: 180px;
padding: 10px;
aspect-ratio: 1;
`
export const Center = styled.div`
display: flex   ;
flex: 3;
flex-direction: column;
gap: 20px;
padding: 20px;
justify-content: center;
`
export const Name = styled.span`
`
export const Category = styled.span`
`
export const Price = styled.span`
font-size: 30px;
margin: 0 10px;
text-align: center;
@media(max-width:1000px){font-size:15px}
color: #228fff;
font-weight: 600;
`
export const Right = styled.div`
flex: 2;    
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
position: relative;
`

export const Number = styled.span`
text-align: center;
font-size: 25px;
margin: 0 10px;
margin-top: 30px;
@media(max-width:1000px){font-size:10px}

`
export const Button = styled.button`
position: absolute;
bottom: 10px;
padding: 10px;
background: #810000 ;
color: white;
cursor: pointer;
`
export const RightContainer = styled.div`
flex: 1;
`
export const DetailsContainer = styled.div`
width: 100%;
border: 1px solid gray;
padding: 20px;
height: 400px;
display: flex;
flex-direction: column;
position: relative;
gap: 30px;
justify-content: center;
`
export const DetailsItem = styled.span`
word-spacing: 1px;
color: lightgray;
font-size:20px;
white-space:nowrap; 
padding:10px;
`

export const CheckoutButton = styled.button`
position: absolute;
bottom: 10px;
width: 90%;
padding: 10px;
background-color: #228fff;
color: white;
cursor: pointer;
&:hover{
    background-color:#2284f5;   
}
`
export const EmptyContainer = styled.div`
display: flex;
align-self: center;
margin-top: 200px;
flex-direction: column;
gap: 20px;
`
export const Nothing = styled.h1`

`
