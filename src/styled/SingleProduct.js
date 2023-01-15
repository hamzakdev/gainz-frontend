import styled from 'styled-components'


export const Container = styled.div`
display: flex;
padding: 20px 50px;
gap: 50px;
margin-top: 40px;
@media(max-width:1140px){margin-top: 60px;gap:25px;}
@media(max-width:680px){flex-direction:column; align-items:center}
`


export const Right = styled.div`
color: white;
display: flex;
flex-direction: column;
gap: 40px;
@media(max-width:1000px){gap:20px}
@media(max-width:680px){gap:15px}

`
export const Title   = styled.h1`
color: white;
@media(max-width:1300px){font-size:1.7rem}
@media(max-width:1000px){font-size:1.5rem}
@media(max-width:680px){font-size:1 rem}

`
export const Price = styled.span`
font-size: 30px;
color: #228fff !important;
@media(max-width:1300px){font-size:25px}

@media(max-width:1000px){font-size:20px}
@media(max-width:680px){font-size:15px}

`
export const Desc = styled.p`
@media(max-width:1000px){font-size:14px}
@media(max-width:680px){font-size:12px}

`
export const Number = styled.span`
font-size: 32px;
margin: 0 10px;
@media(max-width:1000px){font-size:20px}

`
export const AmountContainer = styled.div`

`
export const InDecButton = styled.button`
font-size: 30px;
width: 40px;
border: none;
border-radius: 10px;
cursor: pointer;
background-color: #228fff;
color: white;
@media(max-width:1000px){font-size:20px;width:25px;}
:hover{
    background-color:#1684f5;
}

`
export const AddButton = styled.button`
width: 60%;
padding: 10px;
background-color: #228fff;
color: white;
display: flex;
justify-content: center;
align-items: center;
@media(max-width:1000px){padding:5px;width:50%;}
:hover{
    background-color:#2284f5;
    cursor:pointer;
}

`
export const AdditionalContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
@media(max-width:1000px){font-size:10px}


`
export const Additional = styled.span`

`

