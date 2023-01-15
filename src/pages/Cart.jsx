import React, { useState } from 'react'
import { Button, Category, Center, CheckoutButton, Container, DetailsContainer, DetailsItem, EmptyContainer, GoToShopping, Image, Left, LeftContainer, Name, Nothing, Number, Price, Right, RightContainer } from '../styled/Cart'
import {  useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartRedux';
import {Link} from 'react-router-dom'

const Cart = () => {
  document.title = "Cart - GAINZ.GA"
  const {total, products} = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  return (
    <Container>
      <LeftContainer> 
      {
        products.length >= 1 ?
        products?.map((p)=>(
          <div key={p._id} style={{display:'flex',}}>
        <Left><Image src={p.images[0]} /></Left>
        <Center>
          <Name>{p.name}</Name>
          <Category><b>Category:</b> {p.category}</Category>
        </Center>
        <Right>
    <Number>Quantity: {p.quantity }</Number>
          <Price>{p.price * p.quantity} PKR</Price>
          <Button onClick={()=>dispatch(removeFromCart({...p}))}>Remove From Cart</Button>
        </Right>
          </div>
          )) :
          <EmptyContainer>
            <Nothing>Your Cart is empty</Nothing>
            <Link to="/all" style={{padding:'10px', backgroundColor:'yellow',textAlign:'center', textDecoration:'none', color:'black', borderRadius:'10px'}}>Start Shopping</Link>
          </EmptyContainer>
      }
      </LeftContainer>
      <RightContainer>
        <DetailsContainer>
          <DetailsItem><b style={{fontSize:'25px', marginRight:'5px'}}> Items Price:</b> {total} PKR</DetailsItem>
          <DetailsItem><b style={{fontSize:'25px', marginRight:'5px'}}> Shipping Cost:</b>  250 PKR</DetailsItem>
          <DetailsItem><b style={{fontSize:'25px', marginRight:'5px'}}> Discount:</b>  50 PKR</DetailsItem>
          <DetailsItem><b style={{fontSize:'25px', marginRight:'5px'}}> Total:</b> {total + 200} PKR</DetailsItem>
          <CheckoutButton>CHECKOUT</CheckoutButton>
        </DetailsContainer>
      </RightContainer>
    </Container>
  )
}

export default Cart