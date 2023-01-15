import React from 'react'
import { Container, Line, Title } from '../styled/FeaturedProducts'
import Product from './Product'
import {motion} from 'framer-motion'
import {staggerContainer} from './utils/motion'
import '../additionalcss/featuredproduct.css'
import { useSelector } from 'react-redux'


const FeaturedProducts = () => {
  const {error, products} = useSelector(state=>state.products)
  
  return (
    <Container id='featured'>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Title>
            OUR LATEST COLLECTION
        </Title>
        <Line></Line>
        </div>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className='featured-product-container'
        >
            {
              error ? <h1 style={{color:'white', backgroundColor:'#aa3b3b', padding:'10px'}}>{error}</h1> :
                products.map((p, index)=>(
                    <Product {...p} index={index} key={p._id} />
                    
                    ))
                }
      
                </motion.div>
    </Container>
  )
}

export default FeaturedProducts