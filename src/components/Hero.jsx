import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, textVarient, slideIn } from './utils/motion'
import { Image, Section } from '../styled/Hero'
import '../additionalcss/hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <Section>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className='hero-main-div'
        >
            <div className='hero-button-div'>
      <Link to="all" style={{textDecoration:'none', color:'inherit'}}>
        <motion.button 
        variants={textVarient(1)}
        className="hero-button"
        >
          EXPLORE
        </motion.button >
        </Link>
        </div>
        <motion.div
         className='hero-img-div' 
         variants={slideIn("left", "tween", 0.2, 1)}
         >
            <div>
            <Image src='hero.jpg' />
            </div>
        </motion.div>
        </motion.div>
    </Section>
  )
}

export default Hero