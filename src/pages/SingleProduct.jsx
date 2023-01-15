import React, { useEffect, useState  } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../apiCalls/productsApi';
import { AddButton, Additional, AdditionalContainer, AmountContainer, Container, Desc, InDecButton, Number, Price, Right, Title } from '../styled/SingleProduct';
import Loading from '../components/Loading'
import Carousel from '../components/Carousel';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useAlert } from 'react-alert';
import { addToCart } from '../redux/cartRedux';
import Swal from 'sweetalert2'

const SingleProduct = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const {product, isFetching, error} = useSelector(state=>state.singleProduct)
  const [quantity, setQuantity] = useState(1)
  const location = useLocation()
  const id = location.pathname.split('/')[2];
  document.title = `${product.name} - GAINZ.GA`
    const navigate = useNavigate()
    useEffect(()=>{
      if(error){
        return alert.error(error)
      }
        fetchSingleProduct(dispatch, id)
    }, [dispatch, id,error, alert])

    const handleCart =()=>{
        dispatch(addToCart({...product, quantity}))
        Swal.fire({
          title: `PRODUCT ADDED TO CART`,
          text: "You can go to cart or continue shopping" ,
          icon: 'success',
          confirmButtonText: 'Go to Cart',
          showDenyButton:true,
          denyButtonText:"Continue Shopping",
          confirmButtonColor:'#2284f5',
          background:'#1a1a1a',
          color:"white",
        }).then(okay=>{
          if(okay.isConfirmed){
            navigate('/cart')
          }
        })
    }


  return (
    <>
      {  isFetching ? <Loading /> :
        <Container>
            <Carousel {...product} />
        <Right>
      <Title>{product.name}</Title>
      <Price>{product.price} PKR</Price>
      <Desc><div dangerouslySetInnerHTML={{__html : product.description}}></div></Desc>
      <AmountContainer>
    <InDecButton onClick={()=>setQuantity(prev=> prev === 1 ? prev+0 : prev - 1)}>-</InDecButton>      
    <Number>{quantity}</Number>
    <InDecButton onClick={()=>setQuantity(prev=> prev + 1)}>+</InDecButton>      
      </AmountContainer>
    <AddButton onClick={handleCart}><AddShoppingCartIcon /> ADD TO CART</AddButton>
    <AdditionalContainer>
      <Additional>Vendor: Polo</Additional>
      <Additional>Category: {product.category}</Additional>
    </AdditionalContainer>
        </Right>
        </Container>}
      </>
  )
}

export default SingleProduct