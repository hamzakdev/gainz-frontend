import React, { useState } from 'react'
import { ImageContainer, ImageOption, Left, ImageOptions, Image } from '../styled/Carousel'
import {motion} from 'framer-motion'
import {textVarient} from './utils/motion'

const Carousel = ({images}) => {
  
    const [selectedImage, setSelectedImage] = useState(0)
    const [toggle, setToggle] = useState(false)
    const handleClick = ()=>{
      setToggle(prev=>!prev)
    }
    console.log(toggle)
  return (
    <Left>
         <ImageOptions >
        
        {images &&  <ImageOption style={{display: !images[0]&& "none"}
        } src={ images[0]}
         onClick={()=>setSelectedImage(0)}
         /> }
        {images &&  <ImageOption style={{display: !images[1]&& "none"}} src={ images[1]}
         onClick={()=>setSelectedImage(1)}
         /> }
        {images &&  <ImageOption style={{display: !images[2]&& "none"}} src={ images[2]}
         onClick={()=>setSelectedImage(2)}
         /> }
       </ImageOptions>
          <ImageContainer onClick={handleClick}>
            <motion.div
            variants={textVarient(0)}
            initial="hidden"
            animate="show"
            >

        <Image style={{
          scale: toggle && "1.5", cursor: toggle ? "zoom-out" : "zoom-in",
          
        }}  src={images && images[selectedImage]} />
        </motion.div>

          </ImageContainer> 
         </Left>

  )
}

export default Carousel