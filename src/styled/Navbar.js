import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    padding: 2vmax;
    align-items: center;

`
export const Left = styled.div`
    flex: 1;    
    `
export const Logo = styled.h1`
    font-size: 3em;
    padding: 0%;
    font-family: 'Lobster', cursive;
    font-weight: 100;
    color: white;
    
    :hover{
    .search-container{
       border: none;
    }
}
@media (max-width:550px){
    font-size: 2em;
}
`
export const Center = styled.div`
flex: 1;

`
export const SearchContainer = styled.div`
display: flex;
align-items: center;
color: white;
max-width: 200px;
border: 0.5px solid  ;
border-radius: 50px;
border-color: rgba(255, 255, 255, 0.3);
transition: 0.3s ease all;

`

export const SearchInput = styled.input`
background-color: transparent;
border: none;
font-size: 1em   !important ;
margin-left: 2em;
width: 100%;
color: white;
transition: 0.3s ease all;

::placeholder {
       color: white;
       font-weight: 100;
   }
   :focus{
    outline: none;
   margin-left: 10px;
   }
   @media (max-width:430px){
    margin-left: 10px;
}
`
export const Right = styled.div`
flex: 0.3;
display: flex;
justify-content: flex-end   ;
align-items: center;
    
`
export const ProfileImage = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 10px;
    border-radius: 50%;
    transition: 0.3s ease all;
    object-fit: cover;
    :hover{
        filter: opacity(0.5);
    }   
`