import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {slideIn} from './utils/motion'
import { Container, Image, Name, Price } from '../styled/Product'
const Product = ({name, price, images,_id, index}) => {
  return (
    <motion.div
    variants={slideIn("right",'tween', 0.2 * index, 0.6)}
    >
    <Link to={`/product/${_id}`} style={{textDecoration:'none'}}>
    <Container>
    <Image src={images[0]} />
    <div style={{display:'flex', flexDirection:"column", }}>
    <Name>{name}</Name>
    <Price>{price} PKR</Price>
    </div>
    </Container>
    </Link>
    </motion.div>
  )
}

export default Product